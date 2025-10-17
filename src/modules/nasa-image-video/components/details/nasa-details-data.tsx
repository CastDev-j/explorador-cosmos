import type { NASAImageAndVideoByID } from "../../interfaces/nasa-image-and-video-by-id";
import { Container } from "@/components/ui/container";
import NASADetailsNotFound from "./nasa-details-not-found";

interface Props {
  data: NASAImageAndVideoByID;
}

const formatDate = (iso?: string) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

const pickImageHref = (
  links?: { href?: string; rel?: string; render?: string }[]
) => {
  if (!links || links.length === 0) return undefined;
  const preview = links.find(
    (l) => l.rel === "preview" || l.rel === "thumbnail"
  );
  if (preview?.href) return preview.href;
  const image = links.find((l) => l.render === "image");
  if (image?.href) return image.href;
  return links[0].href;
};

const NasaDetailsData = ({ data }: Props) => {
  type DataEntry = {
    center?: string;
    date_created?: string;
    description?: string;
    keywords?: string[];
    media_type?: string;
    nasa_id?: string;
    title?: string;
  };

  type Item = {
    data?: DataEntry[];
    links?: { href?: string; rel?: string; render?: string }[];
    href?: string;
  };

  const items = (data?.collection?.items || []) as unknown as Item[];

  if (items.length === 0) {
    return <NASADetailsNotFound />;
  }

  return (
    <Container className="space-y-6">
      {items.map((item: Item, idx: number) => {
        const entry = item.data?.[0];
        const img = pickImageHref(item.links);

        return (
          <article
            key={idx}
            className="flex flex-col md:flex-row gap-4 items-start"
          >
            {img && (
              <div className="w-full md:w-56 flex-shrink-0">
                <img
                  src={img}
                  alt={entry?.title || entry?.nasa_id || "nasa image"}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            )}

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-stone-900">
                {entry?.title}
              </h3>

              <div className="mt-2 text-sm text-stone-600">
                <span className="mr-4">{entry?.center}</span>
                <span>{formatDate(entry?.date_created)}</span>
              </div>

              {entry?.description && (
                <p className="mt-3 text-stone-700">{entry.description}</p>
              )}

              {entry?.keywords && entry.keywords.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.keywords.map((k, i) => (
                    <span
                      key={i}
                      className="text-sm bg-stone-100 text-stone-700 px-2 py-1 rounded"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 text-sm text-stone-500">
                ID: <span className="font-medium">{entry?.nasa_id}</span>
              </div>
            </div>
          </article>
        );
      })}
    </Container>
  );
};

export default NasaDetailsData;
