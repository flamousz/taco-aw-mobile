const { Ingredient, Item } = require("../models/index");

class IngredientController {
     static async getIngredient(req, res, next) {
          try {
               const ingredient = await Ingredient.findAll({
                    order: [["createdAt", "DESC"]],
               });

               res.status(200).json(ingredient);
          } catch (err) {
               next(err);
          }
     }
     static async getIngredientByItem(req, res, next) {
          try {
                const {id} = req.params

                const item = await Item.findByPk(id, {
                    include: {
                        model: Ingredient
                    }
                })
            //    const ingredient = await Ingredient.findAll({
            //         order: [["createdAt", "DESC"]],
            //    });

               res.status(200).json(item);
          } catch (err) {
               next(err);
          }
     }
}

module.exports = IngredientController;
