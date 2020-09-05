/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/configs/router/App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/configs/redux/store'

const RNRedux = () => {
    return (
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => RNRedux);
