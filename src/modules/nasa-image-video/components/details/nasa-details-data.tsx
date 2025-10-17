import type { NASAImageAndVideoByID } from "../../interfaces/nasa-image-and-video-by-id";
import NASADetailsNotFound from "./nasa-details-not-found";
import Button from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";
import {
  IoArrowBack,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router";

interface Props {
  data: NASAImageAndVideoByID;
}

const pickImageHref = (
  links?: { href?: string; rel?: string; render?: string }[]
) => {
  if (!links || links.length === 0) return undefined;

  const large = links.find(
    (l) => l.rel === "alternate" && l.href?.includes("~large")
  );
  if (large?.href) return large.href;

  const medium = links.find(
    (l) => l.rel === "alternate" && l.href?.includes("~medium")
  );
  if (medium?.href) return medium.href;

  const preview = links.find((l) => l.rel === "preview");
  if (preview?.href) return preview.href;

  return links[0]?.href;
};

const NasaDetailsData = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/nasa");
    }
  };

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

  const entry = items[0]?.data?.[0];
  const img = pickImageHref(items[0]?.links);

  return (
    <div className="min-h-screen">
      <div className="border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <Button onClick={handleGoBack} variant="ghost" className="gap-2">
            <IoArrowBack className="size-4" />
            Volver atrás
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <article className="max-w-5xl mx-auto">
          {img && (
            <div className="w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden mb-8">
              <img
                src={img}
                alt={entry?.title || entry?.nasa_id || "NASA image"}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900  mb-6 leading-tight">
            {entry?.title}
          </h1>

          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-stone-600 ">
            {entry?.center && (
              <div className="flex items-center gap-2">
                <IoLocationOutline className="size-5 text-indigo-600 " />
                <span className="font-medium">{entry.center}</span>
              </div>
            )}
            {entry?.date_created && (
              <div className="flex items-center gap-2">
                <IoCalendarOutline className="size-5 text-indigo-600 " />
                <span>{formatDate(entry.date_created)}</span>
              </div>
            )}
            {entry?.media_type && (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-100 /30 text-indigo-700  rounded-full text-sm font-medium capitalize">
                  {entry.media_type}
                </span>
              </div>
            )}
          </div>

          {entry?.description && (
            <div className="prose prose-stone -w-none mb-8">
              <p className="text-lg leading-relaxed text-stone-700 ">
                {entry.description}
              </p>
            </div>
          )}

          {entry?.keywords && entry.keywords.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-stone-500  uppercase tracking-wide mb-3">
                Etiquetas
              </h2>
              <div className="flex flex-wrap gap-2">
                {entry.keywords.map((k, i) => (
                  <span
                    key={i}
                    className="text-sm bg-stone-100  text-stone-700  px-3 py-1.5 rounded-full hover:bg-stone-200 -700 transition-colors"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-stone-200 ">
            <div className="flex items-center gap-2 text-sm text-stone-500 ">
              <span>ID de NASA:</span>
              <code className="px-2 py-1 bg-stone-100  rounded font-mono text-indigo-600 ">
                {entry?.nasa_id}
              </code>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NasaDetailsData;
