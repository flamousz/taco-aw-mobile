const axios = require("axios");
const redis = require("../configs/config");
const APP_URL = process.env.APP_URL;
const USERS_URL = process.env.USERS_URL;

class FoodController {
	static async getFoods(req, res, next) {
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
			next(err)
		}
	}

	static async getFoodById(req, res, next) {
		try {
			const { id } = req.params;
			const { data } = await axios({ url: `${APP_URL}/items/${id}` });
		
			const user = await axios({ url: `${USERS_URL}/${data.UserMongoId}` })
	

			res.status(200).json({
				...data, User: {name: user.data.userName}
			});
		} catch (err) {
			next(err)
		}
	}

	static async postFood(req, res, next) {
		try {
			const {
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
			next(err)
		}
	}

	static async putFood(req, res, next) {
		try {
		  const { id } = req.params;
		  const { name,
				description,
				price,
				imgUrl,
				UserMongoId,
				categoryId } = req.body;
		  const {data} = await axios({
			method: "PUT",
			url: `${APP_URL}/items/${id}`,
			data: { name,
				description,
				price,
				UserMongoId,
				imgUrl,
				categoryId },
		  });
		  await redis.del("foods:gets");
		  res.status(200).json(data);
		} catch (err) {
			next(err)
		}
	  }

	  static async deleteFood(req, res, next) {
		try {
		  const { id } = req.params;
		  const {data} = await axios({
			method: "DELETE",
			url: `${APP_URL}/items/${id}`,
		  });
		  await redis.del("foods:gets");
		  res.status(200).json(data);
		} catch (err) {
			next(err)
		}
	  }

}

module.exports = FoodController;
