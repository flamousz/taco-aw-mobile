const axios = require("axios");
const redis = require("../configs/config");
const APP_URL = process.env.APP_URL;
const USERS_URL = process.env.USERS_URL;

class FoodController {
	static async getFoods(req, res) {
		try {
			let cacheFoodsData = await redis.get("foods:get");

			if (cacheFoodsData) {
				cacheFoodsData = JSON.parse(cacheFoodsData);
				return res.status(200).json(cacheFoodsData);
			}

			const { data } = await axios({ url: `${APP_URL}/items` });
			// redis cache set
			await redis.set("foods:get", JSON.stringify(data));

			res.status(200).json(data);
		} catch (err) {
			console.log(err);
		}
	}

	static async getFoodById(req, res) {
		try {
			const { id } = req.params;

			const { data } = await axios({ url: `${APP_URL}/items/${id}` });
			// redis cache set

			res.status(200).json(data);
		} catch (err) {
			console.log(err);
		}
	}

	static async postFood(req, res, next) {
		try {
			let {
				name,
				description,
				price,
				imgUrl,
				UserMongoId,
				categoryId,
				ingredient,
			} = req.body;
			const { data } = await axios({
				method: "POST",
				url: `${APP_URL}/items`,
				data: {
					name,
					description,
					price,
					imgUrl,
					UserMongoId,
					categoryId,
					ingredient,
				},
			});
			await redis.del("foods:get");
			res.status(201).json(data);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = FoodController;
