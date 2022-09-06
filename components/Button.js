import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Button = ({text,  onClick})=>{
    return (
            <TouchableOpacity style={styles.button} onPress = {onClick}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
    },
    buttonText: {
        color: "white",
        fontSize: "16rem",
        fontFamily: "Montserrat_500Medium",
        letterSpacing: "1px"
    },
})

export default Button