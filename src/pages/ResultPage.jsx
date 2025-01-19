
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const { answers, resetAnswers } = useQuiz(); 

  const congratsImage =
    "https://img.freepik.com/premium-vector/congratulations-clipart-cartoon-vector_705090-4321.jpg?semt=ais_hybrid";

  const correctAnswer = { one: 2, two: 2, three: 3, four: 1, five: 4 };

  const calculateScore = (answers, correctAnswer) => {
    let score = 0;

    
    for (let key in answers) {
    
      if (answers[key] === correctAnswer[key]) {
        score++; 
      }
    }

    return score;
  };

  const totalScore = calculateScore(answers, correctAnswer);

  
  localStorage.clear();

  
  const handleReset = () => {
    resetAnswers(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="md:w-1/2 shadow-md flex flex-col items-center justify-center bg-green-100 p-6">
        {totalScore === 5 ? (
         
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-xl font-medium text-gray-700 mb-4">
              Your scored a perfect <span className="text-green-600 font-bold">{totalScore}/5</span>
            </p>
            <img
              src={congratsImage}
              alt="Congratulations"
              className="w-48 h-48 mx-auto mb-6"
            />
            <div className="flex gap-2 justify-center items-center">
             
              <Link
                to="/quiz"
                className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
                onClick={handleReset}
              >
                Re-Start
              </Link>
             
              <Link
                to="/"
                className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
                onClick={handleReset}
              >
                Go To Home
              </Link>
            </div>
          </div>
        ) : (
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Quiz Results: {totalScore}/5
            </h2>
            <div className="mt-3">
              <h3 className="text-green-600 font-semibold text-xl mb-5">
                Total Correct Answer : {totalScore}
              </h3>
              <h3 className="text-red-600 font-semibold text-xl mb-5">
                Total Wrong Answer : {5 - totalScore}
              </h3>
              <div className="flex gap-4 justify-center">
              
                <Link
                  to="/quiz"
                  className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
                  onClick={handleReset}
                >
                  Try Again
                </Link>
                <Link
                to="/"
                className="btn bg-sky-400 hover:bg-sky-500 text-white mt-4 w-32 px-6 py-2 rounded-md font-semibold"
                onClick={handleReset}
              >
               Try Latter
              </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
