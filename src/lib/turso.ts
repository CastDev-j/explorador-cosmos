import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../db/schema.js";

const turso = createClient({
  url: "http://127.0.0.1:8080",
  // url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso, { schema });
