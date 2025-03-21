import { IBaseEntity } from "../../core/interfaces/IBaseEntity.interface";
import { Request } from "express";

export interface Blague extends IBaseEntity {
  question: string;
  response: string;
}

export interface BlagueRequest extends Request {
  id: string;
  question: string;
  response: string;
}
