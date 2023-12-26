const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
    process.exit(2);
  }
};

module.exports = connection;
