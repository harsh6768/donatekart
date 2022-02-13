const axios = require("axios");

class CampaignService {
    static getCampaignDataAxios(campaignUrl) {
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: campaignUrl
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((err) => {
                    resolve(null);
                });
        });
    }
}

module.exports = CampaignService;
