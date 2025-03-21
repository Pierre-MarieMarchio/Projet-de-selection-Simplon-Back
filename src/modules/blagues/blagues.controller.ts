import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../core/utils/asyncHandler";

export const blaguesController = {
  getBlagues: asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      res.json({ message: "hello world from controller" });
    }
  ),

  getError: asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      throw new Error("test Error");
    }
  ),
};
