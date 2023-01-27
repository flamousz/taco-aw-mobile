const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb+srv://rivalsyahmidan:phase-03@cluster0.yfv0edv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

let db;

async function runConnection() {
	try {
		db = client.db("project-2-ph3-rival");
		return db;
	} catch (error) {
		await client.close();
		throw error;
	}
}

function getDatabase() {
	return db;
}

module.exports = { runConnection, getDatabase };
