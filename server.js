const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const profesionalRouter = require("./router/router");
const cors = require('cors');

app.use(cors());
app.use("/", profesionalRouter)

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT,HOST,()=>{
    console.log(`App listening on port ${HOST}:${PORT}`)
})