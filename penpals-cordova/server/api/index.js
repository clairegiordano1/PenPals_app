const router = require("express").Router();
router.use("/users", require("./users"));
router.use("/requests", require("./requests"));
router.use("/endorsements", require("./endorsements"));
router.use("/plans", require("./plans"));
router.use("/posts", require("./posts"));
router.use("/likes", require("./likes"));

//404 API ROUTE NOT FOUND
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});
//hi test
console.log("testing");

//upload

module.exports = router;
