import { Router } from "express";
import { BlaguesController } from "./blagues.controller";

const router = Router();
const blaguesController = new BlaguesController();

router.get("/", blaguesController.getAll);
router.get("/:id", blaguesController.getById);
router.post("/", blaguesController.create);
router.put("/:id", blaguesController.update);
router.delete("/:id", blaguesController.delete);

export default router;
