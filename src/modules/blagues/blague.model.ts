import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { database } from "../../configs/database";

export class BlagueModel extends Model<
  InferAttributes<BlagueModel>,
  InferCreationAttributes<BlagueModel>
> {
  declare id: string;
  declare question: string;
  declare response: string;
  declare is_deleted: boolean;
}

BlagueModel.init(
  {
    id: { type: DataTypes.UUID, primaryKey: true },
    response: { type: DataTypes.STRING(255), allowNull: false },
    question: { type: DataTypes.STRING(255), allowNull: false },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: database,
    tableName: "Blagues",
    timestamps: true,
    underscored: true,
  }
);
