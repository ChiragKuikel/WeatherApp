const mongoose = require('mongoose');
require('dotenv').config();
const mongo_url = process.env.MONGO_CONN;
main().then(() => {console.log("Mongodb connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);

}