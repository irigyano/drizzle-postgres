import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "./db/schema";

// Consider singleton: https://github.com/drizzle-team/drizzle-orm/discussions/688
const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient);

// Example query syntax
const result = await db.select().from(users);

// Close db connection
queryClient.end();
