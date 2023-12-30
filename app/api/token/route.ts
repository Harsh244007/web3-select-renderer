import data from "../data/data.json";
export async function GET() {
  return Response.json(data, { status: 200 });
}
