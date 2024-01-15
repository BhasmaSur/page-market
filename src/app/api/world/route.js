import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql`SELECT datname FROM pg_database`;
  return new Response(JSON.stringify(rows));
}
