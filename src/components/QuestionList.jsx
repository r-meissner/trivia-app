import { useState, useEffect, useRef } from "react";
import Question from "./Question.jsx";

const QuestionList = ({ setFinished, setScore, options }) => {
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    let ignore = false;
    const getQuestions = async () => {
      try {
        const params = new URLSearchParams(options)
        console.log(params.toString())
        const res = await fetch(
          `https://the-trivia-api.com/v2/questions?${params.toString()}`
        );
        const data = await res.json();
        if (!ignore) {
          console.log(data);
          setQuestionList(data);
          setLoading(false); // Set loading to false after data is fetched
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    getQuestions();

    return () => {
      ignore = true;
    };
  }, []);

  const handleFinish = () => {
    setFinished(true);
    setScore(scoreRef.current);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  if (loading) {
    return <div className="flex flex-col justify-center max-w-fit mx-auto my-10">
      <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>; // Show loading state
  }

  if (questionList.length === 0) {
    return <div>No questions available</div>; // Handle empty state
  }

  return (
    <div className="fixed flex flex-col justify-center w-96 p-10 rounded-box bg-base-300 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
      <Question question={questionList[index]} scoreRef={scoreRef} />
      {index === questionList.length-1 ? (
        <button
          className="btn btn-primary max-w-fit mx-auto"
          onClick={() => handleFinish()}
        >
          Finish
        </button>
      ) : (
        <button
          className="btn btn-primary max-w-fit mx-auto"
          onClick={() => handleNext()}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionList;
