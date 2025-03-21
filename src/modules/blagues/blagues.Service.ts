import { BaseApiService } from "../../core/bases/BaseApiService";
import { Blague } from "./blague.interfaces";
import { BlagueRepository } from "./blagues.repository";

export class BlaguesService extends BaseApiService<Blague> {
  constructor() {
    super(new BlagueRepository());
  }

  protected override getInterfacePrototype(): Blague {
    return {
      id: "",
      response: "",
      question: "",
    };
  }

  public async getRandom(): Promise<Blague> {
    const allBlagues = await this._repository.findAll();
    const randomeNumber = Math.floor(Math.random() * allBlagues.length);
    return this.filterToInterface(allBlagues[randomeNumber]);
  }
}
