const router = require("express").Router();
const { Plan, User } = require("../db/models");

//GET --> /API/PLANS
router.get("/", async (req, res, next) => {
  try {
    const plans = await Plan.findAll();
    res.json(plans);
  } catch (error) {
    next(error);
  }
});

//GET --> /API/PLANS/:USERID
router.get("/:postId", async (req, res, next) => {
  try {
    const plans = await Plan.findAll({
      where: {
        postId: req.params.postId,
      },
    });
    res.json(plans);
  } catch (error) {
    next(error);
  }
});
// //GET --> /API/PLANS/:POSTID
// router.get("/:postId", async (req, res, next) => {
//   try {
//     const plans = await Plan.findAll({
//       where: {
//         postId: req.params.postId,
//       },
//     });
//     res.json(plans);
//   } catch (error) {
//     next(error);
//   }
// });

//POST --> /API/PLANS
router.post("/", async (req, res, next) => {
  /* etc */
  try {
    const plan = await Plan.create(req.body);
    res.json(plan);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
