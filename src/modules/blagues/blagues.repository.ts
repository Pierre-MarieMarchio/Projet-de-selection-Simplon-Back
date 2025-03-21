import { BaseRepository } from "../../core/bases/BaseRepository";
import { Blague } from "./blague.interface";
import { BlagueModel } from "./blague.model";

export class BlagueRepository extends BaseRepository<Blague> {
  constructor() {
    super(BlagueModel)
  }
}
