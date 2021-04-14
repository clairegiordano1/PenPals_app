const Sequelize = require("sequelize");
const db = require("../db");

const Like = db.define("plan", {
  liked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Like;
