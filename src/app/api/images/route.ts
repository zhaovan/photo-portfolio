import fs from "fs";
import path from "path";

export async function GET() {
  const dirRelativeToPublicFolder = "photos";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );

  return Response.json({ images });
}
