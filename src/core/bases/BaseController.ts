import { Request, Response } from "express";

import { asyncHandler } from "../utils/asyncHandler";
import { BaseApiService } from "./BaseApiService";
import { IBaseEntity } from "../interfaces/IBaseEntity.interface";

export abstract class BaseController<T extends IBaseEntity, R extends Request> {
  protected readonly _modelService: BaseApiService<T>;

  constructor(modelService: BaseApiService<T>) {
    this._modelService = modelService;
  }

  public getAll = asyncHandler(async (req: Request, res: Response) => {
    const result = await this._modelService.getAll();
    return res.json(result);
  });

  public getById = asyncHandler(async (req: Request, res: Response) => {
    const result = await this._modelService.getById(req.params.id);
    return res.json(result);
  });

  public create = asyncHandler(async (req: R, res: Response) => {
    const result = await this._modelService.create(req.body);
    return res.json(result);
  });

  public update = asyncHandler(async (req: R, res: Response) => {
    const result = await this._modelService.updateById(req.params.id, req.body);
    return res.json(result);
  });

  public delete = asyncHandler(async (req: R, res: Response) => {
    const result = await this._modelService.DeleteById(req.params.id, req.body);
    return res.json(result);
  });
}
