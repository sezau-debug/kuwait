import {View, Text} from 'react-native';
import react from "react";

const Header=(props)=>{
    <View style={{marginLeft:15}}>
    <Text style={{fontWeight:'bold, dontSize:22'}}>
        {props.name}
        </Text>
    </View>
}
export default Header
