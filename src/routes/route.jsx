import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import QuizPageTwo from "../pages/QuizPageTwo";
import QuizPageThree from "../pages/QuizPageThree";
import QuizPageFour from "../pages/QuizPageFour";
import QuizPageFive from "../pages/QuizPageFive";
import ResultPage from "../pages/ResultPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/quiz-two",
        element: <QuizPageTwo />,
      },
      {
        path: "/quiz-three",
        element: <QuizPageThree />,
      },
      {
        path: "/quiz-four",
        element: <QuizPageFour />,
      },
      {
        path: "/quiz-five",
        element: <QuizPageFive />,
      },
      {
        path: "/quiz-result",
        element: <ResultPage />,
      },
    ],
  },
]);
