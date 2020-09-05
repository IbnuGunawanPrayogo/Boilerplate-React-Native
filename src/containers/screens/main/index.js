import React, { Component } from 'react'
import { View } from 'react-native'
import Text from '../../../components/atoms/Text'
import Button from '../../../components/molecules/buttonPrimary'

class index extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                    fontFamily: 'montserrat-semiBold', 
                    fontSize: 20,
                    marginTop: 20,
                    color: '#304FF3'
                }}>Introduction</Text>
                <Text>Welcome to boilerplat-RN</Text>

                <Button title="Go to Counter" loading={false} onPress={() => this.props.navigation.navigate('Counter')} />
            </View>
        )
    }
}

export default index