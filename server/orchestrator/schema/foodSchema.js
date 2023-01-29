const axios = require("axios");
const APP_URL = process.env.APP_URL;
const USERS_URL = process.env.USERS_URL
const redis = require("../configs/config");

const foodTypeDef = `#graphql

type Food {
    id: ID
    name: String
    description: String
    price: Int
    imgUrl: String
    UserMongoId: ID
    categoryId: ID
    user: User
    Category: Category
    Ingredients: [Ingredient]
}

input NewFood {
    name: String
    description: String
    price: Int
    imgUrl: String
    UserMongoId: ID
    categoryId: ID
    ingredient: [NewIngredient]
}

type Ingredient {
    name: String
}

type Category {
    name: String
}

input NewIngredient {
    name: String
}

input EditFood {
    name: String
    description: String
    price: Int
    imgUrl: String
    UserMongoId: ID
    categoryId: ID
}

type PostFoodMessage {
	message: String
} 

type DeleteFoodMessage {
	message: String
} 

type EditFoodMessage {
	message: String
} 

type Query {
    getFoods: [Food]
    getFoodById(id: ID!): Food 
}

type Mutation {
    postFood(input: NewFood): PostFoodMessage
    editFood(id: ID!, input: EditFood): EditFoodMessage
    deleteFood(id: ID!): DeleteFoodMessage
}

`;

const foodResolvers = {
	Query: {
		getFoods: async () => {
			try {
				const cache = await redis.get("foods");

				if (cache) {
					const data = await JSON.parse(cache);
					return data;
				}
				const { data } = await axios({ url: `${APP_URL}/items` });
				await redis.set("foods", JSON.stringify(data));
				return data;
			} catch (err) {
				throw err.response.data;
			}
		},
		getFoodById: async (_, args) => {
			try {
				const { id } = args;

				const { data } = await axios({ url: `${APP_URL}/items/${id}` });
                const user = await axios({ url: `${USERS_URL}/${data.UserMongoId}` })
				return {
                    ...data, 
                    user: user.data
                };
			} catch (err) {
				throw err.response.data;
			}
		},
	},
	Mutation: {
		postFood: async (_, args) => {
			try {
				const {
					name,
					description,
					price,
					imgUrl,
					UserMongoId,
					categoryId,
					ingredient,
				} = args.input;
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
				await redis.del("foods");
				return data;
			} catch (err) {
				throw err.response.data;
			}
		},
        deleteFood: async (_, args) => {
			try {
				const { id } = args;
				const { data } = await axios({
					method: "DELETE",
					url: `${APP_URL}/items/${id}`,
				});
				await redis.del("foods");
				return data;
			} catch (err) {
				throw err.response.data;
			}
		},
        editFood: async (_, args) => {
            try {
              const { id } = args;
              const { name,
                description,
                price,
                imgUrl,
                UserMongoId,
                categoryId,
                ingredient } = args.input;
              const {data} = await axios({
                method: "PUT",
                url: `${APP_URL}/items/${id}`,
                data: { name,
                    description,
                    price,
                    imgUrl,
                    UserMongoId,
                    categoryId,
                    ingredient },
              });
              await redis.del("foods");
              return data;
            } catch (err) {
              throw err.response.data;
            }
          }
	},
};

module.exports = {foodTypeDef, foodResolvers}