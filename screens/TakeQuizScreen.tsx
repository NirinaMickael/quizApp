import Question from '../components/quiz/Question'
import ResponseList from '../components/quiz/ResponseList'
import { View, Text } from '../components/Themed'
import Timer from '../components/Timer'
import { StyleSheet } from 'react-native'
import SubmitResponse from '../components/quiz/SubmitResponse'
import CategoryList from '../components/quiz/CategoryList'
import Colors from '../constants/Colors'
import { useState } from 'react'
import { QuizContext } from '../context/quizContext'
import { IQuiz } from '../types'
import QuestionDashboard from '../components/quiz/QuestionDashboard'
// import { useEffect } from "react";
// import Url from "../config/BaseUrl";
export default function TakeQuizScreen() {
  const [quiz,setQuiz] = useState(false);
  const [quizData,setQuizContext] = useState<IQuiz>({
    category:"",
    difficulty:""
  });
  const handlingCategory = (data:IQuiz)=>{
    setQuiz(true);
  };
  const setQuizData = (data:IQuiz)=>{
    setQuizContext(data);
  }
  return (
    <QuizContext.Provider value={{setQuizData,quizData}} >
          <View>
     { !quiz&&<View style={styles.containter}>
        <View
          style={{
            height:"10%",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Choose your Category
          </Text>
        </View>
        <View
          style={{
            height: '70%',
          }}
        >
          <CategoryList />
        </View>
        <SubmitResponse
          label="Start"
          onPress={(data:IQuiz) => handlingCategory(data)}
          backgroundColor={Colors.dark.background}
        />
      </View>
    }{
      quiz && <QuestionDashboard/>
    }
    </View>
    </QuizContext.Provider>
  )
}

const styles = StyleSheet.create({
  containter: {
    marginHorizontal: 16,
  },
})
