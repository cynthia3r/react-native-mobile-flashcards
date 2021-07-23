import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

export default function FlashcardsStatusBar({ backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    );
}

FlashcardsStatusBar.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
};