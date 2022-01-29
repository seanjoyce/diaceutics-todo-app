import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  switch (req.method) {
    case "GET":
      fs.readFile("./data/todos.json", "utf8", (_error, todos) => {
        return res.status(200).json(todos);
      });
      break;
    case "POST":
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
  }
}
