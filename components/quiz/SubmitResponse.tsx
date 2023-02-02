import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from '../Themed'
import { StyleSheet } from 'react-native'
import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import { IQuiz } from '../../types'
type submitProps = {
  label: string
  onPress: (data:IQuiz) => void
  backgroundColor: string
}
export default function SubmitResponse({
  label,
  onPress,
  backgroundColor,
}: submitProps) {
  const {quizData,setQuizData} = useContext(QuizContext);
  return (
    <View
        style={{
            height:"15%",
            display:'flex',
            justifyContent:'flex-end'
        }}
    >
      <TouchableOpacity
        style={[styles.container, { backgroundColor }]}
        onPress={()=>onPress(quizData)}
      >
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
})
