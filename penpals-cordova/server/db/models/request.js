const Sequelize = require("sequelize");
const db = require("../db");

const Request = db.define("request", {
  sent_request: {
    type: Sequelize.INTEGER,
  },
  accepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Request;
