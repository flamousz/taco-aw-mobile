if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require('express')
const app = express()
const cors = require('cors')
const { runConnection, getDatabase } = require('./config/mongoConnection')
const router = require('./routes')
const errHandler = require('./middlewares/errhandler')
const port = process.env.PORT || 4001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.use(errHandler)

runConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        });
    })
    .catch(err => console.log(err))

