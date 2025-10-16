import { sleep } from "@/lib/sleep";
import type { NASAImageAndVideo } from "../interfaces";
import { itemsPerPageOptions } from "@/config";

const NasaImageAndVideoAPIBaseURL = `https://images-api.nasa.gov/search?page_size=${itemsPerPageOptions.nasa}`;

export async function searchQuery({
  queryKey,
}: {
  queryKey: [string, string, number];
}): Promise<NASAImageAndVideo> {
  const [, query, page] = queryKey;

  await sleep(1000);

  const response = await fetch(
    `${NasaImageAndVideoAPIBaseURL}&q=${query}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
