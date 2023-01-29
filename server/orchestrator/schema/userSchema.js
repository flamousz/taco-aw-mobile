const axios = require("axios");
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

input NewUser {
    userName: String!
    email: String!
    password: String!
    phoneNumber: String
    address: String
  }

type DeleteUser {
	message: String
}  

type Mutation {
    postUser(input: NewUser): User
    deleteUser(_id: ID!): DeleteUser
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
				throw err.data;
			}
		},
		getUserById: async (_, args) => {
			try {
				const { _id } = args;

				const { data } = await axios({ url: `${USERS_URL}/${_id}` });
				return data;
			} catch (err) {
				throw err.data;
			}
		},
	},
	Mutation: {
		postUser: async (_, args) => {
			try {
				const role = "admin";
				const { userName, email, password, phoneNumber, address } =
					args.input;
				const { data } = await axios({
					method: "POST",
					url: `${USERS_URL}`,
					data: { userName, email, password, role, phoneNumber, address },
				});
				await redis.del("users");
				return data;
			} catch (err) {
				throw err.data;
			}
		},
		deleteUser: async (_, args) => {
			try {
				const { _id } = args;
				const { data } = await axios({
					method: "DELETE",
					url: `${USERS_URL}/${_id}`,
				});
				await redis.del("users");
				return data;
			} catch (err) {
				throw err.data;
			}
		},
	},
};

module.exports = { userTypeDef, userResolvers };
