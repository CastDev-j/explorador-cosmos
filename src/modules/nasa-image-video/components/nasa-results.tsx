import React from "react";
import { Subtitle } from "@/components/ui/subtitle";
import { Paragraph } from "@/components/ui/paragraph";
import { Caption } from "@/components/ui/caption";
import { Container } from "@/components/ui/container";
import { Highlight } from "@/components/ui/highlight";
import Pagination from "@/components/ui/pagination";
import { itemsPerPageOptions } from "@/config";
import { FaAudioDescription, FaImage, FaVideo } from "react-icons/fa6";
import { FaStickyNote } from "react-icons/fa";
import { Link } from "react-router";
import type {
  NASAImageAndVideo,
  Item,
} from "../interfaces/nasa-image-and-video";
import NASASearchNotFound from "./nasa-details-not-found";

interface Props {
  data: NASAImageAndVideo;
}

const NASAResults: React.FC<Props> = ({ data }) => {
  const { collection } = data;
  const { items, metadata } = collection;

  const getPreviewImage = (item: Item) => {
    const previewLink = item.links?.find((link) => link.rel === "preview");
    return previewLink?.href;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case "image":
        return <FaImage />;
      case "video":
        return <FaVideo />;
      case "audio":
        return <FaAudioDescription />;
      default:
        return <FaStickyNote />;
    }
  };

  return (
    <Container className="space-y-8" padding={false}>
      {metadata.total_hits > 0 && (
        <section className="space-y-4 mt-6 text-center">
          <Paragraph size="lg">
            Se encontraron{" "}
            <Highlight variant="indigo">{metadata.total_hits}</Highlight>{" "}
            resultados
          </Paragraph>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const itemData = item.data[0];
          const previewImage = getPreviewImage(item);

          return (
            <Link
              to={`/nasa/${itemData.nasa_id}`}
              key={itemData.nasa_id || index}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white rounded-sm  overflow-hidden duration-300 border border-stone-200/50"
            >
              {previewImage && (
                <div className="relative h-48 bg-stone-200 overflow-hidden">
                  <img
                    src={previewImage}
                    alt={itemData.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    {getMediaIcon(String(itemData.media_type))}{" "}
                    {String(itemData.media_type)}
                  </div>
                </div>
              )}

              <div className="p-4 space-y-3">
                <Subtitle variant="h5" className="line-clamp-2">
                  {itemData.title}
                </Subtitle>

                <div className="flex items-center gap-2 text-sm text-stone-600 ">
                  <span className="font-medium">{String(itemData.center)}</span>
                  <span>•</span>
                  <time>{formatDate(itemData.date_created)}</time>
                </div>

                <Paragraph size="sm" className="line-clamp-3">
                  {itemData.description}
                </Paragraph>

                {itemData.keywords && itemData.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {itemData.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-indigo-100 /30 text-indigo-700  px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                    {itemData.keywords.length > 3 && (
                      <span className="text-xs text-stone-500 px-2 py-1">
                        +{itemData.keywords.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {(itemData.photographer || itemData.secondary_creator) && (
                  <Caption>
                    {itemData.photographer || itemData.secondary_creator}
                  </Caption>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <Pagination
        totalItems={metadata.total_hits}
        itemsPerPage={itemsPerPageOptions.nasa}
      />

      {items.length === 0 && <NASASearchNotFound />}
    </Container>
  );
};

export default NASAResults;
