import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FlatList, SafeAreaView ,StatusBar,StyleSheet} from "react-native";
import data from "../../@util/params/data";
import Colors from "../../constants/Colors";
import { QuizContext } from "../../context/quizContext";
import { View } from "../Themed";
import CategoryBox from "./CategoryBox";
export default function CategoryList() {
  const [selectedId,setSelectedId] = useState<number>(0)
  const {quizData,setQuizData} = useContext(QuizContext);
  const renderItem = ({item}: {item: any}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : Colors.light.background;
    const color = item.id === selectedId ? '#fff' : '#000';
    const iconCheck = item.id === selectedId ?  <Ionicons name="checkmark-circle" size={25} color={color} /> : <View></View>
    
    const handlingSelectedId = (item:any)=>{
      setQuizData(
        {
          category:item.category,
          difficulty:quizData.difficulty
        }
      )
      setSelectedId(item.id);
    }
    return (
      <CategoryBox
        item={item}
        onPress={() => handlingSelectedId(item)}
        backgroundColor={backgroundColor}
        textColor={color}
        icon={iconCheck}
      />
    );
  };
  return (
   <SafeAreaView>
        <FlatList
            data={data.category}
            renderItem={renderItem}
            extraData={selectedId}
            keyExtractor={item=>item.id}
            nestedScrollEnabledr
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