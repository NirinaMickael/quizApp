import Font from "../../constants/Font";

import { View,Text } from "../Themed";

type questionProps = {
    text: string;
}
export default function Question({text}:questionProps) {
  return (
    <View style={{marginVertical:20}}>
        <Text style={{fontSize:Font.text.small,fontWeight:"bold"}} >{text}</Text>
    </View>
  )
}
