import React, { Component } from 'react'
import { View } from 'react-native'
import Text from '../../../components/atoms/Text'
import Button from '../../../components/molecules/buttonPrimary'
import { Increment, Decrement } from '../../../configs/redux/actions'
import { connect } from 'react-redux'

class index extends Component {
    render() {
        const {value, Increment, Decrement} = this.props

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                    fontFamily: 'montserrat-semiBold', 
                    marginTop: 50,
                    fontSize: 20
                }}> DECREMENT & INCREMENT </Text>
                
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button 
                        loading={false} 
                        onPress={() => Decrement(value)} 
                        title='-'
                        style={{paddingHorizontal: 25, marginTop: 50}}
                    />
                    <Text style={{
                        fontFamily: 'montserrat-semiBold', 
                        marginTop: 50,
                        fontSize: 48
                    }}> {value} </Text>
                    <Button 
                        loading={false} 
                        onPress={() => Increment(value)} 
                        title='+'
                        style={{paddingHorizontal: 25, marginTop: 50}}
                    />
                </View>
            </View>
        )
    }
}

const StateToProps = (state) => {
    return  {
        value: state.Reducers.value
    }
  }
  
const DispatchToProps = dispatch => ({
    Increment: (data) => {
      dispatch(Increment(data));
    },
    Decrement: (data) => {
        dispatch(Decrement(data));
    }
})

export default connect(StateToProps, DispatchToProps)(index)