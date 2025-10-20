import { seed } from "drizzle-seed";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { fooTable } from "./schema.js";

const client = createClient({
  url: "http://127.0.0.1:8080",
});

const db = drizzle(client);

const cosmicData = [
  "Nebula de Orión - Una guardería estelar",
  "Saturno y sus misteriosos anillos",
  "Vía Láctea - Nuestra galaxia hogar",
  "Telescopio James Webb descubre nuevos mundos",
  "Agujero negro supermasivo Sagitario A*",
  "Las fases lunares y las mareas terrestres",
  "Cometa Halley - Visitante cada 76 años",
  "Exoplanetas en la zona habitable",
  "Púlsares - Faros cósmicos en rotación",
  "Observatorio ALMA en el desierto de Atacama",
];

async function main() {
  console.log("Starting cosmic database seeding...");

  await db.delete(fooTable);

  await seed(db, { fooTable }).refine((f) => ({
    fooTable: {
      count: cosmicData.length,
      columns: {
        bar: f.valuesFromArray({
          values: cosmicData,
        }),
      },
    },
  }));

  console.log("Database seeded successfully with cosmic wonders!");
}

main().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
