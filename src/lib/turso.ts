import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../db/schema.js";

const turso = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso, { schema });
