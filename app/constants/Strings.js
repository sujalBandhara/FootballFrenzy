import NetworkManager from './../api/NetworkManager';

var image_url = NetworkManager.getNetworkInstance().imageUrl;
var base_url = NetworkManager.getNetworkInstance().serverUrl;

const Strings = {
    image_base_url: image_url,
    baseURL: base_url,
    home_screen: {
      upcomingTab: "UPCOMING",
      pastTab: "PAST",
      live: "LIVE",
    }
};
module.exports = Strings