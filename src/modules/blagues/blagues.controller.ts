import { BlaguesService } from "./blagues.Service";
import { BaseController } from "../../core/bases/BaseController";
import { Blague } from "./blague.interface";

export class BlaguesController extends BaseController<Blague> {
  constructor() {
    super(new BlaguesService());
  }
}
