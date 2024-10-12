import { useRef, useState, useEffect } from "react";

const Question = ({ question, scoreRef }) => {
  const [clicked, setClicked] = useState({});
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const incorrectAnswers = question.incorrectAnswers.map((answer) => {
    const newAnswer = { text: answer, correct: false };
    return newAnswer;
  });

  const correctAnswer = { text: question.correctAnswer, correct: true };

  const shuffleAnswers = (correctAnswer, incorrectAnswers) => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    // Fisher-Yates shuffle algorithm
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
  };

  useEffect(() => {
    const shuffled = shuffleAnswers(correctAnswer, incorrectAnswers);
    setShuffledAnswers(shuffled);
  }, [question]);

  const handleClick = (correct, answer) => {
    if (clicked === answer) {
      setClicked({});
      if (correct) {
        scoreRef.current -= 1;
      }
    } else {
      setClicked(answer);
    }
    if (correct && clicked !== answer) {
      scoreRef.current += 1;
    }
  };
  return (
    <div className="card">
      <h1 className="text-center text-xl">{question.question.text}</h1>
      <div className="flex flex-col justify-center items-center p-4">
        {shuffledAnswers.map((answer, index) => (
          <div key={index}>
            {clicked === answer ? (<button
              onClick={() => handleClick(answer.correct, answer)}
              className="btn btn-block btn-accent max-w-fit m-4"
            >
              {answer.text}
            </button>) : (<button
              onClick={() => handleClick(answer.correct, answer)}
              className="btn btn-block max-w-fit m-4"
            >
              {answer.text}
            </button>)}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
