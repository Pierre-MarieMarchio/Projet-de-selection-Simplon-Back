import { BaseRepository } from "../../core/bases/BaseRepository";
import { Blague } from "./blague.interfaces";
import { BlagueModel } from "./blague.model";

export class BlagueRepository extends BaseRepository<Blague> {
  constructor() {
    super(BlagueModel);
  }
}
