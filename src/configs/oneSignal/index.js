import { Component } from 'react'
import OneSignal from 'react-native-onesignal'; // Import package from node modules

class index extends Component {
    constructor(properties) {
        super(properties);
        OneSignal.init("APIKEY_ONESIGNAL");
    
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
      }
    
      componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
    
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds = async (device) => {
        console.warn('Device info: ', device.userId);
      }

    render() {
        return (
            this.props.children
        )
    }
}

export default index
