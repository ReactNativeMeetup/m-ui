import { useState, useMemo } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { padding } from '../utils/styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as l from "lodash"
//Components
import { HeaderText } from '../components/HeaderText'
import { Button } from '../components/Button'
import {launchImageLibrary} from "react-native-image-picker"


const Profile = ({ navigation }) => {

    const [photo, setPhoto] = useState("")
    const initialProfileConf = useMemo(() => ({
        "First Name": "",
        "Last Name": "",
        "Email": "",
        "Password": "",
        "Phone Number": "",
        "Description": ""
    }), [])

    const handleChoosePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (response) {
                setPhoto(response);
            }
        });
    };


    const [profile, setProfile] = useState(initialProfileConf)

    return (
        <SafeAreaView style={styles.container}>
            <HeaderText headerText={"Set up your profile!"} subHeaderText={""} />
            {/* <View>
                <>
                <Button text="Upload Photo" onPress={()=>null} />
                </>
                <Button text="Choose Photo" onPress={handleChoosePhoto} />
            </View> */}
            <View style={styles.form}>
                {Object.keys(initialProfileConf).slice(0, 4).map(k => (
                    <TextInput
                        key={k}
                        placeholder={k}
                        onChangeText={(text) => setProfile((curr) => ({ ...curr, [l.camelCase(k)]: text }))}
                        style={styles.textInput}
                    >
                    </TextInput>
                ))}
                <View style={{
                    marginTop: "30%"
                }}>
                    <Button text="Continue" onClick={() => alert(Object.keys(profile)[0])} />
                </View>
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
    form: {
        marginTop: "5%",
        display: "flex",
        justifyContent: "center",
        width: "90%"
    },
    textInput: {
        marginTop: "2%",
        backgroundColor: "rgba(111, 111, 111, 0.1)",
        borderColor: "transparent",
        borderWidth: "1rem",
        ...padding(10, 50, 10, 10),
        borderRadius: "10%"
    }

})

export default Profile