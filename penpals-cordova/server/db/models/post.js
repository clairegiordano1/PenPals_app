const Sequelize = require("sequelize");
const db = require("../db");

const Post = db.define("post", {
  title: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.TEXT,
  },

  imgUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://ww.nydailynews.com/resizer/yR191ZzXawTpPwelV6Bw9wMouAg=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K67GWYOYMKSI45CNMJLA7WWTGM.jpg",
  },

  date: {
    type: Sequelize.TEXT,
  },

  city: {
    type: Sequelize.STRING,
  },
});

module.exports = Post;
