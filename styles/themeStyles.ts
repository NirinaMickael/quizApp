import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3
    },
    container : {
        width:"100%",
        height:"100%",
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text :{
        marginTop:5
    },
    input :{
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor:"#ddd",
        margin:10,
        borderColor:"none"
    },
    image : {
        width:150,
        height:150,
        resizeMode:'cover'
    },
    center :{
        textAlign:"center"
    }
})
