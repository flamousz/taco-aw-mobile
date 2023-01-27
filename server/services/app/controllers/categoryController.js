const { Category } = require('../models/index')

class CategoryController {
    static async getCategory(req, res, next) {
        try {
            const category = await Category.findAll({
                order: [['createdAt', 'DESC']]
            })

            res.status(200).json(category)
        } catch (err) {
            next(err)
        }
    }

    static async postCategory(req, res, next) {
        try {
            let { name } = req.body

            let newCategory = await Category.create({name})
            res.status(201).json({
                message: ` ${newCategory.name} category has been added`
            })
        } catch (err) {
            next(err)
        }
    }


    static async putCategory(req, res, next) {
        try {
            const {id} = req.params
            const { name } = req.body
            const category = await Category.findByPk(id)
            if (!category) {
                throw {
                  name: "NotFound",
                };
              }

            await Category.update({name}, {
                where: {id}
            })
            res.status(200).json({
                message: `${category.name} category has been updated to ${name}`
            })

        } catch (err) {
            next(err)
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const {id} = req.params
            let showDeletedData = await Category.findByPk(id);
            if (!showDeletedData) {
              throw {
                name: "NotFound",
              };
            }

            await Category.destroy({where: {id}})
            res.status(200).json({message: `Category ${showDeletedData.name} has been deleted`})
        } catch (err) {
            next(err)
        }
    }


}


module.exports = CategoryController