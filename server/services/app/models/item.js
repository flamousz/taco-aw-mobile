'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
      Item.hasMany(models.Ingredient, {
        foreignKey: 'itemId'
      })
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name cannot be empty'
        },
        notEmpty: {
          msg: 'Name cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'description cannot be empty'
        },
        notEmpty: {
          msg: 'description cannot be empty'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price cannot be empty'
        },
        notEmpty: {
          msg: 'Price cannot be empty'
        },
        min: {
          args: 4000,
          msg: 'minimal price is 4000'
        }
      }
    },
    imgUrl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image Url cannot be empty'
        },
        notEmpty: {
          msg: 'Image Url cannot be empty'
        }
      }
    },
    UserMongoId: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};