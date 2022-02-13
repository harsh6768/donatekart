const rootRouter = require("express").Router();
const compaignRouter = require("./campaign");

rootRouter.use("/v1", compaignRouter);

module.exports = rootRouter;
