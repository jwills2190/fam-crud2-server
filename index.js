const express = require('express');
const app = express();
require('dotenv').config();
const connectToMongoDB = require("./db/mongodb")
const logger = require("morgan");

const cors = require("cors");

const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(logger('dev'))
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const familyRouter = require("./routes/familyRouter")
app.use("/api", familyRouter);

// const PORT = 3001;
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)

    connectToMongoDB();
})