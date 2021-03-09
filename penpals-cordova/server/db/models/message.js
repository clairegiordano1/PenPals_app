const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  message: {
    type: Sequelize.TEXT,
  },
});

module.exports = Message;
