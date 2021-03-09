const User = require("./user");
// const Message = require("./message");
// const Plan = require("./plan");
// const Post = require("./post");
// const ToCity = require("./toCity");
// const FromCity = require("./fromCity");

// Associations
// User.belongsToMany(Post, { through: Plan });
// Post.belongsToMany(User, { through: Plan });
// Message.belongsTo(Event);
// Message.belongsTo(User, { as: "sender" });

// Post.hasMany(Message);
// User.hasMany(Post, { as: "host" });
// Post.belongsTo(User, { as: "host" });
// User.hasMany(Plan, { as: "userPlan" });
// Plan.hasMany(User, { as: "attendees" });

//------
// User.belongsToMany(Post, { through: Plan });
// Post.belongsToMany(User, { through: Plan });
// Message.belongsTo(Post);
// Message.belongsTo(User, { as: "sender" });

// Post.hasMany(Message);
// User.hasMany(Post, { as: "planner" });
// Post.belongsTo(User, { as: "planner" });
// User.hasMany(Plan, { as: "userPlan" }); //X
// Plan.hasMany(User, { as: "penpals" }); //X
// User.hasOne(ToCity);
// User.hasOne(FromCity);

module.exports = {
  User,
  // Message,
  // Plan,
  // Post,
  // ToCity,
  // FromCity,
};
