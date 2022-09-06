import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {TextInput} from 'react-native';
const Inputs = ({text, onChangeText, main}) => {
  return (
    <TextInput style = {main}
    placeholder = {text}
    onChangeText={onChangeText}/>
  )
}

export default Inputs