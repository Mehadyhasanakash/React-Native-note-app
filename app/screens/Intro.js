import { StyleSheet, View,Text, TextInput, Dimensions} from 'react-native'
import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import color from '../misc/color'
import RoundConBtn from '../components/RoundConBtn'


const Intro = () => {
    const [user, setUser] = useState();
    const hendalText = (text) =>{
        setUser(text);
    }
    console.log(user)
  return (
      <>
      <StatusBar hidden/>
    <View style={styles.container}>
        
        <Text style={styles.inputTile}>Enter your name to continue</Text>
        <TextInput value={user} onChange={hendalText} placeholder='Enter your name' style={styles.TextInput}/>
        <RoundConBtn antIconName="arrowright"/>
         </View>
         </>
  )
}

export default Intro
const width =Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    TextInput:{
        borderWidth:2,
        borderColor: color.PRIMARY,
        width,
        height:60,
        borderRadius:10,
        paddingLeft:15,
        fontSize:15,
        color: color.PRIMARY,
        
        
    },
    inputTile:{
        alignSelf:"flex-start",
        paddingLeft:25,
        marginBottom:5,
        opacity:0.5,
    }
})