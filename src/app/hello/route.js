import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql`SELECT datname FROM pg_database`;
  console.log(rows);
  return new Response(rows);
}
