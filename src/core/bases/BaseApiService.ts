import { v4 as uuidv4 } from "uuid";
import { BaseRepository } from "./BaseRepository";
import { IBaseEntity } from "../interfaces/IBaseEntity.interface";

export abstract class BaseApiService<T extends IBaseEntity> {
  protected readonly _repository: BaseRepository<T>;

  constructor(repositopry: BaseRepository<T>) {
    this._repository = repositopry;
  }

  protected filterToInterface(data: any): T {
    const prototype = this.getInterfacePrototype();

    const filtered: Partial<T> = {};

    for (const key in prototype) {
      if (data.hasOwnProperty(key)) {
        filtered[key] = data[key];
      }
    }

    return filtered as T;
  }

  protected filterArrayToInterface(dataArray: any[]): T[] {
    return dataArray.map((item) => this.filterToInterface(item));
  }

  protected abstract getInterfacePrototype(): T;

  public async getAll(): Promise<T[]> {
    const result = await this._repository.findAll();
    return this.filterArrayToInterface(result);
  }

  public async getById(id: string): Promise<T> {
    const result = await this._repository.findById(id);
    return this.filterToInterface(result);
  }

  public async create(data: T): Promise<T> {
    const id = uuidv4();
    const result = await this._repository.create({ ...data, id });
    return this.filterToInterface(result);
  }

  public async updateById(id: string, data: T): Promise<T> {
    if (id != data.id) {
      throw new Error("Id from params and request does not match");
    }

    const entity = await this._repository.findById(data.id);
    const result = await this._repository.updateById(entity.id, entity);

    return this.filterToInterface(result);
  }

  public async DeleteById(id: string, data: T): Promise<T> {
    if (id != data.id) {
      throw new Error("Id from params and request does not match");
    }

    const entity = await this._repository.findById(data.id);
    const result = await this._repository.deleteById(entity.id);

    return this.filterToInterface(result);
  }
}
