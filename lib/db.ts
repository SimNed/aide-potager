import { neon } from "@neondatabase/serverless";

// Débogage détaillé
const debugEnv = {
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
  hasDbUrl: Boolean(process.env.DATABASE_URL),
  dbUrlStart: process.env.DATABASE_URL?.substring(0, 20) + "...",
};

console.log("Environment Debug:", debugEnv);

// Si pas d'URL, on lève une erreur avec plus de contexte
if (!process.env.DATABASE_URL) {
  throw new Error(
    `Database URL missing. Environment state: ${JSON.stringify(debugEnv)}`
  );
}

const sql = neon(process.env.DATABASE_URL);

export default async function helloWorld() {
  const start = new Date();
  const [dbResponse] = await sql`SELECT NOW()`;
  const dbNow = dbResponse && dbResponse.now ? dbResponse.now : "";
  const end = new Date();
  return {
    dbNow: dbNow,
    latency: Math.abs(end.getMilliseconds() - start.getMilliseconds()),
  };
}
