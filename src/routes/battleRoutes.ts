import { Router } from "express";
import { postBattleController } from "../controllers/battleController";
import namesSchema from "../middlewares/namesSchema";
import { validateSchema } from "../middlewares/validateSchema";

const router = Router();

router.post("/battle", validateSchema(namesSchema), postBattleController);

export default router;
