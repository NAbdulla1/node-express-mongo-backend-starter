const { Router } = require("express");

const apiRouter = new Router();

apiRouter.route("/")
  .get((req, res) => {
    res.status(200).json({ msg: "Hello world from /api." });
  });

module.exports = apiRouter;
