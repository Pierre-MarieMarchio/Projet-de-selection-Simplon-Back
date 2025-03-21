import { Router } from "express";
import blagueRoutes from "./modules/blagues/blagues.routes";

const router = Router();

router.use("/blagues", blagueRoutes);

export default router;
