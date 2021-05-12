const router = require("express").Router();
const { User, Message, Post } = require("../db/models");

//POST --> /API/MESSAGES
router.post("/", async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.json(message);
  } catch (err) {
    next(err);
  }
});

//GET --> /API/MESSAGES
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

// GET --> API/MESSAGES/:MESSAGEID
router.get("/:messagetId", async (req, res, next) => {
  try {
    const message = await Message.findOne({
      where: {
        id: req.params.messageId,
      },
      include: { all: true },
    });
    res.json(message);
  } catch (error) {
    next(error);
  }
});

// GET --> API/POSTS/:POSTID/MESSAGES
router.get("/posts/:postId/messages", async (req, res, next) => {
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

//GET --> /API/MESSAGES/:ID
router.get("/:id", async (req, res, next) => {
  try {
    const messages = await Message.findOne({
      where: {
        id: req.params.id,
      },
      include: User,
    });
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
