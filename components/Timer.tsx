import { View ,Text} from "./Themed";
import { StyleSheet } from "react-native";

import CountDown from "react-native-countdown-component"
type TimerProps = {
  numberOfQuiz : number;
  time : number;
};
export default function Timer({numberOfQuiz,time}:TimerProps) {
  return (
    <View
    style ={
      styles.container
    }
    >
        <Text style={[styles.text]}>Quiz : {numberOfQuiz}</Text>
        <CountDown
        size={10}
        until={time}
        onFinish={()=>alert('Finished')}
        digitStyle={{borderColor:"none"}}
        digitTxtStyle={{color:'#1CC625',fontSize:20}}
        timeLabelStyle={{color:'red',fontWeight:'bold',display:"none"}}
        separatorStyle={{color:'#1CC625'}}
        timeToShow={['M','S']}
        style={{marginLeft:"65%"}}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    borderBottomColor:"#000",
    borderBottomWidth:2,
    display:"flex",
    flexDirection:"row",
    marginTop:"30%"
  },
  text : {
    fontSize:20,
    fontWeight:"bold"
  }
})