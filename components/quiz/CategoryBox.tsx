import { IResponse } from "../../types";
import { Text} from "../Themed";
import { StyleSheet } from "react-native";
import Font from "../../constants/Font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import {Svg} from "../../helpers/Svg";
type ResponseProps =  {
  item:IResponse;
  onPress : ()=>void;
  backgroundColor : string;
  textColor:string,
  icon : JSX.Element
}
export default function CategoryBox( {item,onPress,backgroundColor,textColor,icon}:ResponseProps) {
  const category = item.category;
  return (
    <TouchableOpacity 
    style={
      [styles.item,{backgroundColor}]
    }
    onPress={onPress}
    >
        {/* <Text style={{fontWeight:"bold",fontSize:Font.title.small,...styles.number}}>{item.id}</Text> */}
        <SvgXml xml={Svg[category as string]} width="10%" height="100%" />
        <Text style={[styles.title,{color:textColor}]}>{item.category}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal:15,
    paddingVertical:18,
    marginVertical: 8,
    marginHorizontal:10,
    borderRadius:5,
    display:"flex",
    flexDirection:"row"
  },
  title: {
    fontSize: Font.subTitle.small+3,
    marginHorizontal:10,
    width:"75%",
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