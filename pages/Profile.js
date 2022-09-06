import { useState, useMemo } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { padding } from '../utils/styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import {HeaderText} from '../components/HeaderText'


const GettingStarted = ({navigation}) => {


    const initialProfileConf = useMemo(()=>({
        "First Name": "",
        "Last Name": "",
        "Email": "",
        "Password": "",
        "Profile Picture Url": "",
        "Phone Number": "",
        "Description": ""
    }), [])

    const [profile, setProfile] = useState(initialProfileConf)

    return (
        <SafeAreaView style={styles.container}>
            <HeaderText headerText={"Set up your profile!"} subHeaderText={""}/>
            <View style={styles.form}>
                {Object.keys(initialProfileConf).map(k => (
                    <TextInput 
                        placeholder={k} 
                        onChangeText={(text)=>setProfile((curr) => ({...curr, [k.trim().toLowerCase()]: text}))}
                        style={styles.textInput}
                    >
                        
                    </TextInput>
                ))}
                <TouchableOpacity style = {styles.button}
          onPress = {() => alert(state.firstName+ ' ' + state.lastName+ ' ' + state.phoneNumber+ ' ' + state.email+ ' ' + state.address+ ' ' + state.zipCode)}>
            <Text>
              Signup
            </Text>
          </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        ...padding(0, 15, 0, 15),
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    form:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput:{
        marginTop: "2%",
    }
      
})

export default GettingStarted