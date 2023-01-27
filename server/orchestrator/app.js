if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { userTypeDef, userResolvers } = require("./schema/userSchema");
const port = process.env.PORT || 4000;

const server = new ApolloServer({
	typeDefs: [userTypeDef, ],
	resolvers: [userResolvers],
	introspection: true,
});

startStandaloneServer(server, { listen: { port } })
	.then(({ url }) => {
		console.log(`🚀 Server ready at ${url}`);
	})
	.catch((err) => {
		console.log(err);
	});
