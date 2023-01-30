import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, SafeAreaView ,StatusBar,StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import { IResponse } from "../../types";
import { View } from "../Themed";
import ResponseBox from "./ResponseBox";

let data :IResponse[]=  [
    {
        id:1,
        response:"linux"
    },
    {
        id:2,
        response:"window"
    },
    {
        id:3,
        response:"android"
    },
    {
        id:4,
        response:"mac os"
    },
    {
        id:5,
        response:"mac os"
    }
]
export default function ResponseList() {
  const [selectedId,setSelectedId] = useState<number>(0)

  const renderItem = ({item}: {item: IResponse}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : Colors.light.background;
    const color = item.id === selectedId ? '#fff' : '#000';
    const iconCheck = item.id === selectedId ?  <Ionicons name="checkmark-circle" size={25} color={color} /> : <View></View>
    return (
      <ResponseBox
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        icon={iconCheck}
      />
    );
  };
  return (
   <SafeAreaView>
        <FlatList
            data={data}
            renderItem={renderItem}
            extraData={selectedId}
            keyExtractor={item=>item.id}
        />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }
  })