const router = require("express").Router();
const { User, Post, Message, Plan } = require("../db/models");

//GET --> /API/POSTS
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

// GET --> API/POSTS/:POSTID
router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
      include: { all: true },
    });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

// GET --> API/POSTS/:POSTID/MESSAGES
router.get("/:postId/messages", async (req, res, next) => {
  try {
    const postMessages = await Message.findAll({
      where: {
        postId: req.params.postId,
      },
      include: { model: User, as: "sender" },
    });
    res.json(postMessages);
  } catch (error) {
    next(error);
  }
});

//POST --> /API/POSTS
router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    next(error);
  }
});

//PUT --> /PUT/POSTS/:POSTID
router.put("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });
    const updatedPost = await post.update(req.body);
    res.send(updatedPost);
  } catch (error) {
    next(error);
  }
});

//DELETE --> /DELETE/POSTS/:POSTID
router.delete("/:postId", async (req, res, next) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.postId,
      },
    });
    if (!post) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

//PATCH --> /API/POSTS/:USERID
router.patch("/:postId/users/:userId", async (req, res, next) => {
  try {
    await Plan.update(req.body, {
      where: {
        postId: req.params.postId,
        userId: req.params.userId,
      },
    });
    const postActivity = await Plan.findOne({
      where: {
        postId: req.params.postId,
        userId: req.params.userId,
      },
    });
    res.json(postActivity);
  } catch (error) {
    next(error);
  }
});
//GET --> /API/POSTS/:ID
router.get("/:id", async (req, res, next) => {
  try {
    const posts = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: User,
    });
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
