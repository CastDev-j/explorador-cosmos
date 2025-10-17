import { itemsPerPageOptions } from "@/config";
import type { NASAImageAndVideo } from "../interfaces/NASAImageAndVideo";

const NasaImageAndVideoAPIBaseURL = `https://images-api.nasa.gov/search?page_size=${itemsPerPageOptions.nasa}`;

export async function searchQuery({
  queryKey,
}: {
  queryKey: [string, string, number];
}): Promise<NASAImageAndVideo> {
  const [, query, page] = queryKey;

  const response = await fetch(
    `${NasaImageAndVideoAPIBaseURL}&q=${query}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
