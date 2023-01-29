const axios = require("axios");
const USERS_URL = process.env.USERS_URL;
const redis = require("../configs/config");

class UserController {
	static async getUsers(req, res) {
		try {
			let cacheFoodsData = await redis.get("users:get");

			if (cacheFoodsData) {
				cacheFoodsData = JSON.parse(cacheFoodsData);
				return res.status(200).json(cacheFoodsData);
			}

			const { data } = await axios({ url: `${USERS_URL}` });
			// redis cache set
			await redis.set("users:get", JSON.stringify(data));

			res.status(200).json(data);
		} catch (err) {
			console.log(err);
		}
	}

	static async getUserById(req, res) {
		try {
			const { id } = req.params;
			const { data } = await axios({ url: `${USERS_URL}/${id}` });

			res.status(200).json({
				data
			});
		} catch (err) {
			console.log(err);
		}
	}

	static async postUser(req, res) {
		try {
			const { userName, email, password, address, phoneNumber } = req.body;
			const { data } = await axios({
				method: "POST",
				url: `${USERS_URL}`,
				data: {
					userName,
					email,
					password,
					address,
					phoneNumber,
				},
			});
			await redis.del("users:get");
			res.status(201).json(data);
		} catch (err) {
			console.log(err);
		}
	}

    static async deleteUser(req, res, next) {
		try {
		  const { id } = req.params;
		  const {data} = await axios({
			method: "DELETE",
			url: `${USERS_URL}/${id}`,
		  });
		  await redis.del("users:get");
		  res.status(200).json(data);
		} catch (err) {
		  console.log(err);
		}
	  }
}

module.exports = UserController;
