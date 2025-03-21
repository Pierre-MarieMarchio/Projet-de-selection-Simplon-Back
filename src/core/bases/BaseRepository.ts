import { Model, ModelStatic, CreateOptions, FindOptions } from "sequelize";
import { ResourceNotFoundException } from "../utils/Exeption";
import { IBaseEntity } from "../interfaces/IBaseEntity.interface";

export abstract class BaseRepository<T extends IBaseEntity> {
  protected readonly _model: ModelStatic<Model<any, any>>;

  constructor(model: ModelStatic<Model<any, any>>) {
    this._model = model;
  }

  public async findAll(options?: FindOptions): Promise<T[]> {
    const result = await this._model.findAll(options);
    return result.map((item) => item.get({ plain: true }) as T);
  }

  public async findById(id: string): Promise<T> {
    const result = await this._model.findByPk(id);
    if (!result) {
      throw new ResourceNotFoundException(id);
    }
    return result.get({ plain: true }) as T;
  }

  public async create(data: Partial<T>, options?: CreateOptions): Promise<T> {
    const result = await this._model.create(data as any, options);
    return result.get({ plain: true }) as T;
  }

  public async updateById(id: string, data: Partial<T>): Promise<T> {
    const instance = await this._model.findByPk(id);
    if (!instance) {
      throw new ResourceNotFoundException(id);
    }
    const updated = await instance.update(data as any);
    return updated.get({ plain: true }) as T;
  }

  public async deleteById(id: string): Promise<T> {
    const result = await this._model.findByPk(id);
    if (!result) {
      throw new ResourceNotFoundException(id);
    }
    await result.destroy();
    return result.get({ plain: true }) as T;
  }
}
