const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let dataWorks;

const getDataBase = async () => {
    try {
        if(dataWorks){
            return dataWorks
        }
        const client = await new MongoClient(process.env.MONGO_URL).connect();
        console.log("Data is connected succssfully!!");

        dataWorks = client.db();
        return dataWorks;

    } catch (err) {
        console.error("Database connection failed:", err);
    }
}



module.exports = {getDataBase};