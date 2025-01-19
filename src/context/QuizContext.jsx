import React, { createContext, useState, useContext } from "react";

// Create Context
const QuizContext = createContext();

// Create a Provider Component
export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({}); // To store user answers

  // Function to update an answer
  const updateAnswer = (questionId, answerId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  // Function to reset all answers
  const resetAnswers = () => {
    setAnswers({});
  };

  return (
    <QuizContext.Provider value={{ answers, updateAnswer,resetAnswers}}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the QuizContext
export const useQuiz = () => useContext(QuizContext);
