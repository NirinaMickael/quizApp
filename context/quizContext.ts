import { createContext } from "react";
import { IQuiz, QuizContextType } from "../types";
const data : IQuiz = {
    category:"",
    difficulty:""
}
const defaultValue:QuizContextType ={
    quizData : data,
    setQuizData:()=>{}
}
const QuizContext = createContext<QuizContextType>(defaultValue);
export {QuizContext};