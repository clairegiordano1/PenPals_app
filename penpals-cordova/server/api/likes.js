const router = require("express").Router();
const { Like } = require("../db/models");

//GET --> /API/LIKES
router.get("/", async (req, res, next) => {
  try {
    const likes = await Like.findAll({ include: { all: true } });
    res.json(likes);
  } catch (error) {
    next(error);
  }
});

//GET --> /API/LIKES/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const likes = await Like.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(likes);
  } catch (error) {
    next(error);
  }
});
//GET --> /API/LIKES/:POSTID
router.get("/:postId", async (req, res, next) => {
  try {
    const likes = await Like.findAll({
      where: {
        postId: req.params.postId,
      },
    });
    res.json(likes);
  } catch (error) {
    next(error);
  }
});

//POST --> /API/LIKES
router.post("/", async (req, res, next) => {
  /* etc */
  try {
    const like = await Like.create(req.body);
    res.json(like);
  } catch (error) {
    next(error);
  }
});
//POST -->/API/LIKES/:POSTID
router.post("/", async (req, res, next) => {
  try {
    const likes = await Post.create({
      where: {
        postId: req.params.postId,
      },
    });
    res.json(likes);
  } catch (error) {
    next(error);
  }
});

//PUT --> /PUT/LIKES/:POSTID
router.put("/:postId", async (req, res, next) => {
  try {
    const like = await Like.findOne({
      where: {
        id: req.params.postId,
      },
    });
    const updatedLike = await like.update(req.body);
    res.send(updatedLike);
  } catch (error) {
    next(error);
  }
});

//PATCH --> /API/LIKE/:USERID
router.patch("/:likeId/users/:userId", async (req, res, next) => {
  try {
    await Like.update(req.body, {
      where: {
        postId: req.params.postId,
        userId: req.params.userId,
      },
    });
    const likeActivity = await Like.findOne({
      where: {
        postId: req.params.postId,
        userId: req.params.userId,
      },
    });
    res.json(likeActivity);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
