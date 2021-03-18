const router = require("express").Router();
router.use("/users", require("./users"));
// router.use("/messages", require("./messages"));
// router.use("/plans", require("./plans"));
// router.use("/posts", require("./posts"));
// router.use("/toCitys", require("./toCitys"));
// router.use("/fromCitys", require("./fromCitys"));
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
