import express from "express";
import cors from "cors";
import battleRoutes from "./routes/battleRoutes";
import rankingRoutes from "./routes/rankingRoutes";

const server = express();

server.use(cors(), express.json());
server.use(battleRoutes, rankingRoutes);

server.listen(5000, () => {
  console.log("SERVER RUNNING!");
});
