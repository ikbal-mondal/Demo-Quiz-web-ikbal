import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-blue-50 p-4 ">
      {/* Title */}
  <div className="border-2 border-blue-700 flex flex-col items-center justify-center p-8 rounded-md ">
  <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
        Kids Quiz Questions and Answers Learning
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-md ">
        Welcome to the kids quiz! Test your knowledge, have fun, and learn with
        interesting questions designed just for you.
      </p>
       
      {/* Start Quiz Button */}
      <button className="btn mt-8  bg-blue-700 text-white text-center  text-lg font-semibold rounded-lg  hover:bg-sky-600">
        <Link to="/quiz">Start Quiz</Link>
      </button>
      <img className="w-[100%]" src="https://img.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_23-2148923148.jpg" alt="" />
  </div>
    </div>
  );
};

export default Home;
