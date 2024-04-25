import { sql } from "@vercel/postgres";

export async function GET() {
  // const { rows } = await sql`SELECT datname FROM pg_database`;
  const test = "Hello world"
  return new Response(JSON.stringify(test));
}
