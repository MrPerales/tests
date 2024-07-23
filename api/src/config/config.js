require("dotenv").config();

const config = {
  dbUrl: process.env.MONGO_URL,
  dbName: process.env.MONGO_DB_NAME,
  port: process.env.PORT || 3000,
};

module.exports = { config };
