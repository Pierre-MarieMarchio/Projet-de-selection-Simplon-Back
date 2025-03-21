import { IBaseEntity } from "../../core/interfaces/IBaseEntity.interface";

export interface Blague extends IBaseEntity {
  question: string;
  response: string;
  is_deleted: boolean;
}
