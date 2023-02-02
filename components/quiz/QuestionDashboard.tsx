import { View } from '../Themed'
import Timer from '../Timer'
import Question from './Question'
import ResponseList from './ResponseList'
import SubmitResponse from './SubmitResponse'
import { StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../context/quizContext'
import Url from '../../config/BaseUrl'
import Loader from '../loader'
export default function QuestionDashboard() {
  const { quizData, setQuizData } = useContext(QuizContext)
  const [allQuiz,setAllQuiz] = useState<Array<any>>([]);
  const [loading,setLoading]=useState<boolean>(true);
//   console.log(quizData)
  useEffect(()=>{
    (async()=>{
      try {
        const response = await fetch(Url(10,quizData.category,"Hard"))
        const data = await response.json();
        setAllQuiz(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
          console.log(error);
      }
    })()
  },[]);
  if(!loading){
    return (
        <View style={styles.containter}>
          <Timer time={100} numberOfQuiz={allQuiz.length} />
          <Question text="1.Operation system Operation systemOperation systemOperation system" />
          <ResponseList />
          <SubmitResponse
            label="Submit"
            onPress={() => console.log('kuku')}
            backgroundColor="blue"
          />
        </View>
      )
  }else{
        return (
            <View >
                <Loader/>
            </View>
        )
  }
}
const styles = StyleSheet.create({
  containter: {
    marginHorizontal: 16,
  },
  loaderContainer: {
    height:"100%",
    backgroundColor:"red"
  }
})
