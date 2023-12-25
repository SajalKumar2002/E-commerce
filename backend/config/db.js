const mongoose = require("mongoose");

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE);
    } catch (error) {
        console.error(error);
    }
};

module.exports = connection;
