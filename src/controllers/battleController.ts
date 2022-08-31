import { Request, Response } from "express";
import battleService from "../service/battleService";

export async function postBattleController(req: Request, res: Response) {
  const { body } = res.locals;
  try {
    const data = await battleService(body.firstUser, body.secondUser)
    return res.send(data);
  } catch (error: any) {
    return res.status(error.error.response.status).send(error.error.code);
  }

}
