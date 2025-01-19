import  { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import {  useNavigate } from "react-router-dom";

import triangle from "../assets/Images/triangle.png";
import rectangle from "../assets/Images/rectangle.png";
import prism from "../assets/Images/prism.png";
import oval from "../assets/Images/oval.png";

const QuizPage = () => {
  const questionId = "one";
  const options = [
    { id: 1, src: triangle, label: "Triangle" },
    { id: 2, src: rectangle, label: "Rectangle" },
    { id: 3, src: prism, label: "Prism" },
    { id: 4, src: oval, label: "Oval" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const { updateAnswer } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
    if (storedAnswers[questionId]) {
      setSelectedOption(storedAnswers[questionId]);
    }
  }, [questionId]);

  const handleCheckboxChange = (id) => {
    setSelectedOption(id);
    setError(false); 
    updateAnswer(questionId, id);

    const storedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
    storedAnswers[questionId] = id;
    localStorage.setItem("quizAnswers", JSON.stringify(storedAnswers));
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setError(true);
    } else {
      navigate("/quiz-two");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow-md flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
          1. Look at the pictures below and choose Rectangle :-
        </h2>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-between p-4 bg-white border-2 rounded-lg shadow-md ${
                selectedOption === option.id
                  ? "border-blue-500"
                  : error
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <img src={option.src} alt={option.label} className="w-16 h-16" />
              <input
                type="checkbox"
                className="form-checkbox mx-2 h-6 w-6 text-blue-500"
                checked={selectedOption === option.id}
                onChange={() => handleCheckboxChange(option.id)}
              />
            </div>
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            Please select an option before proceeding.
          </p>
        )}

        <div className="flex justify-end gap-3 w-full max-w-md">
          <button
          disabled
            className="btn btn-primary px-6 py-2 rounded-md"
            onClick={() => console.log("Navigate to the previous quiz")}
          >
            Previous
          </button>
          <button
            className="btn btn-primary px-6 py-2 rounded-md"
            onClick={handleNextClick}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
