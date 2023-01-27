const axios = require("axios");
const APP_URL = process.env.APP_URL;
const USERS_URL = process.env.USERS_URL;
const redis = require("../configs/config");

const userTypeDef = `#graphql

type User {
    _id: ID
    userName: String
    email: String
    address: String
    phoneNumber: String
    role: String
  }

type Query {
    getUsers: [User]
    getUserById(_id: ID!): User 
}

`;

const userResolvers = {
	Query: {
		getUsers: async () => {
			try {
				const cache = await redis.get("users");

				if (cache) {
					const data = await JSON.parse(cache);
					return data;
				}
				const { data } = await axios({ url: `${USERS_URL}` });
				await redis.set("users", JSON.stringify(data));
				return data;
			} catch (err) {
				throw err.response.data;
			}
		},
		getUserById: async (_, args) => {
			try {
				const { _id } = args;

				const { data } = await axios({ url: `${USERS_URL}/${_id}` });
				return data;
			} catch (err) {
				throw err.response.data;
			}
		}
	},
};

module.exports = { userTypeDef, userResolvers };
