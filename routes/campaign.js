const donateKartRouter = require("express").Router();
const campaignRouter = require("express").Router();
const CampaignController = require("../controller/campaign");

donateKartRouter.route("/getAllComapign").get(CampaignController.getListOfCampains);
donateKartRouter.route("/getActiveCampaign").get(CampaignController.getActiveCampaign);
donateKartRouter.route("/getClosedCampaign").get(CampaignController.getClosedCampaign);

campaignRouter.use("/campaign", donateKartRouter);

module.exports = campaignRouter;
