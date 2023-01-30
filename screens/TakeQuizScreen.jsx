import Question from "../components/quiz/Question";
import ResponseList from "../components/quiz/ResponseList";
import { View , Text } from "../components/Themed";
import Timer from "../components/Timer";
import { StyleSheet } from "react-native";
import SubmitResponse from "../components/quiz/SubmitResponse";
export default function TakeQuizScreen() {
  return (
    <View
      style={styles.container}
    >
        <Timer/>
        <Question 
        text="1.Operation system Operation systemOperation systemOperation system"
         />
        <ResponseList/>
        <SubmitResponse/>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    marginHorizontal: 16,
  }
})
