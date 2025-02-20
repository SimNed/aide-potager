import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

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
