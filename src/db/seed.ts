import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { favoritesTable } from "./schema.js";

const url =
  process.env.TURSO_DATABASE_URL ?? process.env.VITE_TURSO_DATABASE_URL;
const authToken =
  process.env.TURSO_AUTH_TOKEN ?? process.env.VITE_TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error("Missing TURSO_DATABASE_URL (or VITE_TURSO_DATABASE_URL)");
}

const client = createClient({
  url,
  authToken,
});

const db = drizzle(client);

const userId = "user_34L4ubVMTSXvAPrsWTZjxFgVcMj";

const seedData = [
  // APOD Favorites
  {
    userId,
    type: "apod" as const,
    referenceData: { date: "2024-10-15" },
    isFavorite: 0,
  },
  {
    userId,
    type: "apod" as const,
    referenceData: { date: "2024-09-20" },
    isFavorite: 0,
  },
  {
    userId,
    type: "apod" as const,
    referenceData: { date: "2024-08-12" },
    isFavorite: 1,
  },
  // Mars Rover Favorites
  {
    userId,
    type: "mars_rover" as const,
    referenceData: {
      rover: "curiosity",
      sol: 1000,
      camera: "FHAZ",
      photoId: "102693",
    },
    isFavorite: 1,
  },
  {
    userId,
    type: "mars_rover" as const,
    referenceData: {
      rover: "perseverance",
      sol: 500,
      camera: "NAVCAM",
      photoId: "NRB_0500_0698765432_001ECM_N0261234NCAM00500_01_095J",
    },
    isFavorite: 1,
  },
  {
    userId,
    type: "mars_rover" as const,
    referenceData: {
      rover: "curiosity",
      sol: 2500,
      camera: "MAST",
      photoId: "580921",
    },
    isFavorite: 1,
  },
  // EONET Favorites
  {
    userId,
    type: "eonet" as const,
    referenceData: { eventId: "EONET_6536" },
    isFavorite: 1,
  },
  {
    userId,
    type: "eonet" as const,
    referenceData: { eventId: "EONET_6421" },
    isFavorite: 1,
  },
  {
    userId,
    type: "eonet" as const,
    referenceData: { eventId: "EONET_6789" },
    isFavorite: 1,
  },
  // Image Library Favorites
  {
    userId,
    type: "image_library" as const,
    referenceData: { nasaId: "PIA12348" },
    isFavorite: 1,
  },
  {
    userId,
    type: "image_library" as const,
    referenceData: { nasaId: "hubble_ngc2174" },
    isFavorite: 1,
  },
  {
    userId,
    type: "image_library" as const,
    referenceData: { nasaId: "iss067e123456" },
    isFavorite: 1,
  },
];

async function main() {
  console.log("Starting NASA favorites database seeding...");

  await db.delete(favoritesTable);
  console.log("Cleared existing data");

  await db.insert(favoritesTable).values(seedData);

  console.log(
    `Database seeded successfully with ${seedData.length} favorites!`
  );
  console.log("Breakdown:");
  console.log(`   - APOD: ${seedData.filter((d) => d.type === "apod").length}`);
  console.log(
    `   - Mars Rover: ${seedData.filter((d) => d.type === "mars_rover").length}`
  );
  console.log(
    `   - EONET: ${seedData.filter((d) => d.type === "eonet").length}`
  );
  console.log(
    `   - Image Library: ${
      seedData.filter((d) => d.type === "image_library").length
    }`
  );
}

main().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
