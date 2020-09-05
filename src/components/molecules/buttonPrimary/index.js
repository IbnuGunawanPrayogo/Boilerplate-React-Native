import React from 'react'
import { StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'
import Text from '../../atoms/Text'
import PropTypes from 'prop-types';

function index(props) {

    if(props.loading){
        return (
            <TouchableHighlight style={styles.btnDisable}>
                <ActivityIndicator size="small" color="#304FF3" />
            </TouchableHighlight>
        )
    } else {
        return (
            <TouchableHighlight style={[styles.btnContainer, props.style]} onPress={props.onPress} underlayColor="#066CCC">
                <Text style={styles.title} >{props.title}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#0779E4',
        borderRadius: 8,
        marginHorizontal: 30,
        paddingVertical: 17,
        paddingHorizontal: 10,
        marginVertical: 20
    },
    btnDisable: {
        backgroundColor: '#dedede',
        borderRadius: 8,
        marginHorizontal: 30,
        paddingVertical: 17,
        paddingHorizontal: 20,
        marginVertical: 20
    },
    title: {
        fontFamily: 'montserrat-semiBold',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    }
})


index.propTypes = {
    value: PropTypes.string,
    onPress: PropTypes.func
};

export default index