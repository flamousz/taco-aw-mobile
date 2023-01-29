if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const morgan = require("morgan");
const errHandler = require("./middlewares/errHandler");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

app.use(router);

app.use(errHandler)

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
