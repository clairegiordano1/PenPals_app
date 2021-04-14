const router = require("express").Router();
const { Endorsement } = require("../db/models");

//GET --> /API/ENDORSEMENTS/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const endorsements = await Endorsement.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(endorsements);
  } catch (error) {
    next(error);
  }
});

//POST -->  /API/ENDORSEMENTS/
router.post("/", async (req, res, next) => {
  try {
    const endorsements = await Endorsement.create(req.body);
    res.json(endorsements);
  } catch (error) {
    next(error);
  }
});
//GET ALL -->  /API/ENDORSEMENTS/
router.get("/", async (req, res, next) => {
  try {
    const endorsements = await Endorsement.findAll({
      include: { all: true },
    });
    res.json(endorsements);
  } catch (err) {
    next(err);
  }
});

//DELETE -->  /API/ENDORSEMENTS/:USERID
router.delete("/:userId", async (req, res, next) => {
  try {
    await Endorsement.destroy({
      where: {
        userId: req.params.userId,
      },
    });
    const endorsements = await Endorsement.create(req.body);
    res.json(endorsements);
  } catch (error) {
    next(error);
  }
});

//PUT --> /API/ENDORSEMENTS/:ID
router.put("/:userId", async (req, res, next) => {
  try {
    const endorsement = await Endorsement.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    const updateEndorsement = await endorsement.update(req.body);
    res.json(updateEndorsement);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
