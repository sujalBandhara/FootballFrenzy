import dataManager from './../utils/dataManager';
const CLIENT_PROD_SERVER_DOMAIN = "http://productionIPAddress:3000"
const CLIENT_DEV_SERVER_DOMAIN = "http://developmentIPAddress:3000"
const LOCAL_SERVER_DOMAIN = "http://localhost:3000"

const CLIENT_PROD_SERVER_URL = CLIENT_PROD_SERVER_DOMAIN + "/mobile/api/v1/"
const CLIENT_DEV_SERVER_URL = CLIENT_DEV_SERVER_DOMAIN + "/mobile/api/v1/"
const LOCAL_SERVER_URL = LOCAL_SERVER_DOMAIN + "/mobile/api/v1/"

const EnvironmentType = {
  LOCAL_STUBS: 0,
  DEV_SERVER: 1,
  PROD_SERVER: 2
}

// Change below code for setting up the ::SERVER URL::
const APP_ENVIRONMENT = EnvironmentType.DEV_SERVER
export var check_image_url = APP_ENVIRONMENT

export default class NetworkManager {
  static classInstance = null
  serverUrl = CLIENT_PROD_SERVER_URL
  imageUrl = ""
  showAPILogs = true
  constructor() {
    this.environmentType = APP_ENVIRONMENT
    this.axios = require("axios")
    this.axios.defaults.timeout = 15000

    switch (this.environmentType) {
      case EnvironmentType.PROD_SERVER:
        {
          this.serverUrl = CLIENT_PROD_SERVER_URL;
          this.imageUrl = CLIENT_PROD_SERVER_DOMAIN + "/public/";
        }
        break;
      case EnvironmentType.DEV_SERVER:
        {
          this.serverUrl = CLIENT_DEV_SERVER_URL;
          this.imageUrl = CLIENT_DEV_SERVER_DOMAIN + "/public/";
        }
        break;
      case EnvironmentType.LOCAL_STUBS:
        {
          this.serverUrl = LOCAL_SERVER_URL;
          this.imageUrl = LOCAL_SERVER_DOMAIN + "/public/";
        }
        break;
      default:
        this.serverUrl = CLIENT_PROD_SERVER_URL;
        this.imageUrl = CLIENT_PROD_SERVER_DOMAIN + "/public/";
    }
    this.axios.defaults.baseURL = this.serverUrl
  }

  static getNetworkInstance() {
    if (NetworkManager.classInstance == null) {
      NetworkManager.classInstance = new NetworkManager()
    }
    return this.classInstance
  }


  // :: Home Screen API::
  getTracks(dynamicUrl, requestParams) {
    let apiURL = this.serverUrl + dynamicUrl
    return new Promise((resolve, reject) => {
      this.axios
        .post(apiURL, requestParams)
        .then(response => {
          this.displayAPILogs(apiURL, requestParams, response);
          resolve(response.data)
        })
        .catch(error => {
          console.log("API error===>", error)
          reject(error)
        })
    })
  }
}