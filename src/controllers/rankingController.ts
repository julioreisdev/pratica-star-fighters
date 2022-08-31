import { Request, Response } from "express";

export async function getRankingController(req: Request, res: Response) {
  res.send("boa get ranking");
}
