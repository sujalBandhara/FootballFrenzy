export default class dataManager {

    static myInstance = null;
    latitude = "";
    longitude = "";
    userName = "";

    // Instance for the singleton class
    static getInstance() {
        if (dataManager.myInstance == null) {
            dataManager.myInstance = new dataManager();
        }
        return this.myInstance;
    }

    getUserName() {
        return this.userName
    }
    setUserName(userName) {
        this.userName = userName
    }
}


// How to use dataManager class for set filter array
{/*
    1) import whenever you want to use
        import dataManager from './../../utils/dataManager';
    
    2) Create instance where you want to use
        var filterDataInstance = dataManager.getInstance();

    3)  For getting data from the class
        var filterData = filterDataInstance.getFilterData();
    
    4) For setting data to the class
        var filterData = filterDataInstance.getFilterData();
        filterData.push(your array value)
        filterDataInstance.setFilterData(filterData)
*/}



