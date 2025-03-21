import { Router } from "express";
import blagurRoute from "./modules/blagues/blagues.routes";

const router = Router();

router.use("/blagues", blagurRoute);

export default router;
