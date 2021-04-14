const User = require("./user");
const Request = require("./request");
const Endorsement = require("./endorsement");
const Plan = require("./plan");
const Post = require("./post");
const Like = require("./like");

User.hasMany(Request, { as: "received_request" });
User.hasMany(Request, { as: "sent_request" });
User.hasMany(Endorsement, { as: "endorsed" });

User.belongsToMany(Post, { through: Plan });
Post.belongsToMany(User, { through: Plan });

User.hasMany(Post, { as: "host" });
Post.belongsTo(User, { as: "host" });

User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });
// User.hasMany(Like, { as: "liker" });
Like.belongsTo(Post, { as: "liker" });

// const ToCity = require("./toCity");
// const FromCity = require("./fromCity");

// Associations
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
  Request,
  Endorsement,
  // Message,
  Plan,
  Post,
  Like,
};
