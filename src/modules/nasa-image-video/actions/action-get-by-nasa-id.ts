import { sleep } from "@/lib/sleep";
import type { NASAImageAndVideoByID } from "../interfaces/nasa-image-and-video-by-id";

const NasaImageAndVideoAPIBaseURL = `https://images-api.nasa.gov/search`;

export async function actionGetByNasaId({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<NASAImageAndVideoByID> {
  const [, nasaId] = queryKey;

  await sleep(1000);

  const response = await fetch(
    `${NasaImageAndVideoAPIBaseURL}?nasa_id=${nasaId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default actionGetByNasaId;
