const { CAMPAIGN_URL } = require("../utils/contant");
const campaignService = require("../services/campaignService");

class Campaign {
    static getListOfCampains(req, res) {
        return new Promise((resolve, reject) => {
            try {
                campaignService
                    .getCampaignDataAxios(CAMPAIGN_URL)
                    .then((campaignData) => {
                        campaignData = campaignData.sort((campaign1, campaign2) => {
                            return campaign2.totalAmount - campaign1.totalAmount;
                        });

                        campaignData = campaignData.map((campaign) => {
                            return {
                                title: campaign.title,
                                totalAmount: campaign.totalAmount,
                                backersCount: campaign.backersCount,
                                endDate: campaign.endDate
                            };
                        });
                        res.status(200).send({ data: campaignData, message: "Campaign List!" });
                    })
                    .catch((err) => {
                        console.error("error in campaignData>>>>", campaignData);
                        res.status(500).send(err);
                    });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }

    static getActiveCampaign(req, res) {
        return new Promise((resolve, reject) => {
            try {
                campaignService
                    .getCampaignDataAxios(CAMPAIGN_URL)
                    .then((campaignData) => {
                        campaignData = campaignData.filter((campaign) => {
                            let today = new Date();
                            let campaignDate = new Date(campaign.endDate);
                            if (campaignDate.getTime() >= today.getTime()) {
                                return campaign;
                            }
                        });

                        //createdAt should be last 30 days
                        campaignData = campaignData.filter((campaign) => {
                            let today = new Date();
                            let created = new Date(campaign.created);
                            let createdAt = new Date(new Date().setDate(today.getDate() - 30));

                            if (created.getTime() >= createdAt.getTime() && created.getTime() <= today.getTime()) {
                                return campaign;
                            }
                        });
                        res.status(200).send({ data: campaignData, length: campaignData.length });
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).send(err);
                    });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }

    static getClosedCampaign(req, res) {
        return new Promise((resolve, reject) => {
            try {
                campaignService
                    .getCampaignDataAxios(CAMPAIGN_URL)
                    .then((campaignData) => {
                        campaignData = campaignData.filter((campaign) => {
                            let today = new Date();
                            let campaignDate = new Date(campaign.endDate);
                            if (campaignDate.getTime() < today.getTime() || campaignDate.procuredAmount >= campaignData.totalAmount) {
                                return campaign;
                            }
                        });
                        res.status(200).send({ data: campaignData, length: campaignData.length });
                    })
                    .catch((err) => {
                        console.error(err);
                        res.status(500).send(err);
                    });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
}

module.exports = Campaign;
