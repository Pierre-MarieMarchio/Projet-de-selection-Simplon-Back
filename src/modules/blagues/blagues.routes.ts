import { Router } from "express";
import { blaguesController } from "./blagues.controller";

const router = Router();

router.get("/", blaguesController.getBlagues);
router.get("/error", blaguesController.getError);

export default router;