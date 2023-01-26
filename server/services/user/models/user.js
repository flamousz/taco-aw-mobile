const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

class User {
	static async getUsers() {
		try {
			const dataDb = getDatabase();
			const dataTable = dataDb.collection("User");

			let data = await dataTable
				.find({}, { projection: { password: 0 } })
				.toArray();

			return data;
		} catch (err) {
			throw err;
		}
	}

	static async postUser(input) {
		try {
			let inputUser = {
				...input,
				created_at: new Date(),
			};

			const dataDb = getDatabase();
			const dataTable = dataDb.collection("User");

			let data = await dataTable.insertOne(inputUser);
			return data;
		} catch (err) {
			throw err;
		}
	}

	static async getUserById(id) {
		try {
			const dataDb = getDatabase();
			const dataTable = dataDb.collection("User");

			let data = await dataTable.findOne(
				{ _id: ObjectId(id) },
				{ projection: { password: 0 } }
			);

			return data;
		} catch (err) {
			throw err;
		}
	}

	static async deleteById(id) {
		try {
			const dataDb = getDatabase();
			const dataTable = dataDb.collection("User");

			let data = await dataTable.deleteOne({ _id: ObjectId(id) });

			return data;
		} catch (err) {
			throw err;
		}
	}
}

module.exports = User;
