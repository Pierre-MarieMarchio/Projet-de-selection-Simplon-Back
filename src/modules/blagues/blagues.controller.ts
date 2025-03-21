import { Request, Response } from "express";
import { BlaguesService } from "./blagues.Service";
import { BaseController } from "../../core/bases/BaseController";
import { Blague, BlagueRequest } from "./blague.interfaces";
import { asyncHandler } from "../../core/utils/asyncHandler";

export class BlaguesController extends BaseController<Blague, BlagueRequest> {
  protected readonly _modelService: BlaguesService;

  constructor() {
    super(new BlaguesService());
    this._modelService = new BlaguesService();
  }

  public getRandom = asyncHandler(async (req: Request, res: Response) => {
    const result = await this._modelService.getRandom();
    return res.json(result);
  });
}
