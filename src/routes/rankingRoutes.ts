import { Router } from "express";
import { getRankingController } from "../controllers/rankingController";

const router = Router();

router.get("/ranking", getRankingController);

export default router;
