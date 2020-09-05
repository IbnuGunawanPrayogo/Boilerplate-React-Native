import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

function index(props) {
    return (
        <Text style={[styles.textStyle ,props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'montserrat',
        fontSize: 14,
        fontWeight: '500'
    }
})

index.propTypes = {
    value: PropTypes.string
};

export default index