const router = require("express").Router();
const { User, Comment, Post } = require("../db/models");

//POST --> /API/COMMENTS
router.post("/", async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    next(err);
  }
});

// GET --> API/COMMENTS/:COMMENTID
router.get("/:commentId", async (req, res, next) => {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.commentId,
      },
      include: { all: true },
    });
    res.json(comment);
  } catch (error) {
    next(error);
  }
});

// GET --> API/POSTS/:POSTID/COMMENTS
router.get("/posts/:postId/comments", async (req, res, next) => {
  try {
    const postComments = await Comment.findAll({
      where: {
        postId: req.params.postId,
      },
      include: { model: User, as: "commenter" },
    });
    res.json(postComments);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
