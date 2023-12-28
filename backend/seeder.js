require("dotenv").config();
const connection = require("./config/db");

const users = require("./Data/users").default;
const products = require("./Data/product");

const userModel = require("./model/userModel");
const productModel = require("./model/productModel");
const orderModel = require("./model/orderModel");

connection;

const importData = async () => {
  try {
	console.log(orderModel.find({}));
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    const createdUsers = await userModel.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    console.log(sampleProducts);
    await productModel.insertMany(sampleProducts);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
