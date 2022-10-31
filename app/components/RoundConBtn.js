import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{AntDesign} from "@expo/vactor-icons"
import color from '../misc/color'


const RoundConBtn = ({antIconName, size, color}) => {
  return (
    <AntDesign name={antIconName} size={size || 24} color={color || color.DARK } />
  )
}

export default RoundConBtn

const styles = StyleSheet.create({})