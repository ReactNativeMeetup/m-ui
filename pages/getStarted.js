import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { padding } from '../utils/styles/styles'
import * as SplashScreen from 'expo-splash-screen';

//Components
import {HeaderText} from '../components/HeaderText'

import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';

const GettingStarted = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderText headerText={"Welcome to Meetup"} subHeaderText={"Discover your niche and your niche and develop unforgettable relationship"}/>
            <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage} resizeMode='cover'>
                <View style={
                    {backgroundColor: "#FFFF",
                        marginLeft: -5, 
                        marginTop: -10,
                        width: 150, 
                        height: 150, 
                        ...padding(5, 5, 5, 5), 
                        borderRadius: "25%",
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: {width: -2, height: 4},
                        }}>
                    <Image source={require('../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg')} style={{width:"100%", height: "100%", borderRadius: "25%"}}/>
                </View>
                <View style={
                    {backgroundColor: "#FFF", 
                        marginLeft: 200,
                        width: 175, 
                        height: 175, 
                        ...padding(5, 5, 5, 5), 
                        borderRadius: "25%",
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: {width: -2, height: 4},
                        }}>
                    <Image source={require('../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg')} style={{width:"100%", height: "100%", borderRadius: "25%"}}/>
                </View>
                <View style={
                    {backgroundColor: "#FFF", 
                        marginLeft: 75,
                        width: 125, 
                        height:125, 
                        ...padding(5, 5, 5, 5), 
                        borderRadius: "25%",
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: {width: -2, height: 4},
                        }}>
                    <Image source={require('../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg')} style={{width:"100%", height: "100%", borderRadius: "25%"}}/>
                </View>
                <View style={{
                    marginTop: "30%"
                }}>
                    <Button text={"Get Started"} onClick={() => navigation.navigate("Profile")}/>
                </View>
            </ImageBackground>
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
    headerTextContainer: {
        marginTop: "10%"
    },
    bgImage:{
        marginTop: 25,
        width: "102%",
        height: "80%"
    }
})

export default GettingStarted