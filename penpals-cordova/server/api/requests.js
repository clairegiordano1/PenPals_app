const router = require("express").Router();
const { Request } = require("../db/models");

//GET --> /API/REQUESTS/:USERID
router.get("/:userId", async (req, res, next) => {
  try {
    const requests = await Request.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    res.json(requests);
  } catch (error) {
    next(error);
  }
});

//POST -->  /API/REQUESTS/
router.post("/", async (req, res, next) => {
  try {
    const requests = await Request.create(req.body);
    res.json(requests);
  } catch (error) {
    next(error);
  }
});
//GET ALL -->  /API/REQUESTS/
router.get("/", async (req, res, next) => {
  try {
    const requests = await Request.findAll({
      include: { all: true },
    });
    res.json(requests);
  } catch (err) {
    next(err);
  }
});

//DELETE -->  /API/REQUESTS/:USERID
router.delete("/:userId", async (req, res, next) => {
  try {
    await Request.destroy({
      where: {
        userId: req.params.userId,
      },
    });
    const requests = await Request.create(req.body);
    res.json(requests);
  } catch (error) {
    next(error);
  }
});

//PUT --> /API/REQUESTS/:ID
router.put("/:userId", async (req, res, next) => {
  try {
    const request = await Request.findOne({
      where: {
        userId: req.params.userId,
      },
    });
    const updateRequest = await request.update(req.body);
    res.json(updateRequest);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
