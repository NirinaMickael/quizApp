import { IResponse } from "../../types";
import { Text} from "../Themed";
import { StyleSheet } from "react-native";
import Font from "../../constants/Font";
import { TouchableOpacity } from "react-native-gesture-handler";
type ResponseProps =  {
  item:IResponse;
  onPress : ()=>void;
  backgroundColor : string;
  textColor:string,
  icon : JSX.Element
}
export default function ResponseBox( {item,onPress,backgroundColor,textColor,icon}:ResponseProps) {
  return (
    <TouchableOpacity 
    style={
      [styles.item,{backgroundColor}]
    }
    onPress={onPress}
    >
        <Text style={{fontWeight:"bold",fontSize:Font.title.small,...styles.number}}>{item.id}</Text>
        <Text style={[styles.title,{color:textColor}]}>{item.response}</Text>
        {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 8,
    borderRadius:25,
    display:"flex",
    flexDirection:"row"
  },
  title: {
    fontSize: Font.subTitle.small,
    marginHorizontal:10,
    width:"75%"
  },

  number :{
    backgroundColor:"blue",
    height:30,
    width:30,
    borderRadius:20,
    color:"#fff",
    textAlign:"center",
  }
})