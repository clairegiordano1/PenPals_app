const router = require("express").Router();
const { User, Event } = require("../db/models");

//401 NOT AUTHORIZED
const isLoggedIn = (req, res, next) => {
  if (!User) {
    const error = new Error(
      "You are not authorized to Access the requested information"
    );
    res.status(401).send(error);
    return next(error);
  } else {
    next();
  }
};

//GET --> /API/USERS
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: { all: true },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET --> /API/USERS/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
      include: { all: true },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//PUT --> /API/USERS/:USERID
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});
//PUT IMG --? IMG/API/USERS/:USERID/IMG
router.put("file-upload/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

//POST --> /API/USERS/
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
