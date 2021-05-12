const User = require("./user");
const Request = require("./request");
const Endorsement = require("./endorsement");
const Plan = require("./plan");
const Post = require("./post");
const Like = require("./like");
const Message = require("./message");
const Comment = require("./comment");

// Associations
User.hasMany(Request, { as: "received_request" });
User.hasMany(Request, { as: "sent_request" });
User.hasMany(Endorsement, { as: "endorsed" });
User.belongsToMany(Post, { through: Plan });
Post.belongsToMany(User, { through: Plan });
User.hasMany(Post, { as: "host" });
Post.belongsTo(User, { as: "host" });
User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });
Like.belongsTo(Post, { as: "liker" });
Message.belongsTo(Post);
Message.belongsTo(User, { as: "sender" });
Post.hasMany(Message);
Comment.belongsTo(Post);
Comment.belongsTo(User, { as: "commenter" });
Post.hasMany(Comment);

//Export Models and Associations to DB
module.exports = {
  User,
  Request,
  Endorsement,
  Message,
  Plan,
  Post,
  Like,
  Comment,
};
