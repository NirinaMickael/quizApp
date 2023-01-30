import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../Themed";
import { StyleSheet } from "react-native";
export default function SubmitResponse() {
  return (
    <TouchableOpacity
        style ={styles.container}
    >
        <Text style={styles.text}> Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"blue",
        borderRadius:15,
        paddingVertical:15,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:100
    },
    text :{
        fontSize:20,
        fontWeight:"800",
        color:"#fff"
    }
})