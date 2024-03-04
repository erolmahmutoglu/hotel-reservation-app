import { promises as fs } from "fs";

export async function POST(request: Request) {
  console.log("first request", request.json());
  const file = await fs.readFile(
    process.cwd() + "/public/data/rooms.json",
    "utf8"
  );

  return Response.json(JSON.parse(file));
}
