const brcrypt = require("bcryptjs");

const users = [
  {
    name: "Sajal Kumar",
    email: "learning4sajal@gmail.com",
    password: brcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ramu Singh",
    email: "Ramu@gmail.com",
    password: brcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Sajal",
    email: "Sajal@gmail.com",
    password: brcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

exports.default = users