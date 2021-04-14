const Sequelize = require("sequelize");
const db = require("../db");

const Endorsement = db.define("endorsement", {
  endorsement_user: {
    type: Sequelize.INTEGER,
  },
  message: {
    type: Sequelize.TEXT,
  },
  rating_count: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Endorsement;
