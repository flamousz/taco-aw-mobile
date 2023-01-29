const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");
const { hashPassword } = require("../helpers/bcrypt");

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
			const dataDb = getDatabase();
			const dataTable = dataDb.collection("User");
			if (!input.userName) {
				throw { name: "UsernameCannotbeempty" };
			}
			if (!input.email) {
				throw { name: "EmailCannotbeempty" };
			}
			if (!input.password) {
				throw { name: "PasswordCannotbeempty" };
			}
			if (!input.phoneNumber) {
				throw { name: "PhoneNumberCannotbeempty" };
			}
			if (!input.address) {
				throw { name: "AddressCannotbeempty" };
			}
			if (
				!input.email.split("").includes("@") ||
				!input.email.split(".").includes("com")
			) {
				throw { name: "InvalidEmail" };
			}
			const checkEmailAccount = await dataTable.findOne({ email: input.email });
			if (checkEmailAccount) {
				throw { name: "EmailHasBeenTaken" };
			}

			let inputUser = {
				...input,
				created_at: new Date(),
				password: hashPassword(input.password),
				role: 'admin'
			};

		
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
