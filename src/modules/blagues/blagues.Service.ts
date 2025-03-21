import { BaseApiService } from "../../core/bases/BaseApiService";
import { Blague } from "./blague.interface";
import { BlagueRepository } from "./blagues.repository";

export class BlaguesService extends BaseApiService<Blague>{

    constructor() {
        super(new BlagueRepository)
    }
    
}