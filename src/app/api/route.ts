import { promises as fs } from "fs";

export async function POST(request: Request) {
  const file = await fs.readFile(
    process.cwd() + "/public/data/rooms.json",
    "utf8"
  );

  return Response.json(JSON.parse(file));
}
