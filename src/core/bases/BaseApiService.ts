import { v4 as uuidv4 } from "uuid";
import { BaseRepository } from "./BaseRepository";
import { IBaseEntity } from "../interfaces/IBaseEntity.interface";

export abstract class BaseApiService<T extends IBaseEntity> {
  protected readonly _repository: BaseRepository<T>;

  constructor(repositopry: BaseRepository<T>) {
    this._repository = repositopry;
  }

  public async getAll(): Promise<T[]> {
    const result = await this._repository.findAll();
    return result;
  }

  public async getById(id: string): Promise<T> {
    const result = await this._repository.findById(id);
    return result;
  }

  public async create(data: T): Promise<T> {
    const id = uuidv4();
    const result = await this._repository.create({ ...data, id });
    return result;
  }

  public async updateById(id: string, data: T): Promise<T> {
    if (id != data.id) {
      throw new Error("Id from params and request does not match");
    }

    const result = await this._repository.updateById(id, data);
    return result;
  }

  public async DeleteById(id: string): Promise<T> {
    const result = await this._repository.deleteById(id);
    return result;
  }
}
