import DeviceInfo from 'react-native-device-info';

const CurrentDeviceInfo ={
    "appVersion" :  DeviceInfo.getVersion(),
    "buildNumber" : DeviceInfo.getBuildNumber(),
    "country" : DeviceInfo.getDeviceCountry(),
    "locale" :DeviceInfo.getDeviceLocale(),
    "Manufacturer" : DeviceInfo.getBrand(),
    "Model" : DeviceInfo.getModel(),
    "Name" : DeviceInfo.getDeviceName(),
    "OSVersion" : DeviceInfo.getSystemVersion(),
    "Timezone" : DeviceInfo.getTimezone(),
    "UniqueId" : DeviceInfo.getUniqueID(),
    "os" : DeviceInfo.getSystemName(),
    "token" : "73b01944dcc8b22a1459191001050057fb86e7c1a6dfe171059fb11612c0d2c8"
}

module.exports = CurrentDeviceInfo