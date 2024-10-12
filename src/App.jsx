import React, { useState } from "react";
import QuestionList from "./components/QuestionList";
import ResultModal from "./components/ResultModal";
import StartScreen from "./components/StartScreen";

const App = () => {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(false);
  const [options, setOptions] = useState({
    limit: 5,
  });

  if (finished === true) {
    return (
      <div className="relative">
        <ResultModal
          score={score}
          setFinished={setFinished}
          setStart={setStart}
        />
      </div>
    );
  } else if (start === false) {
    return (
      <div className="relative">
        <StartScreen setStart={setStart} setOptions={setOptions} />
      </div>
    );
  } else {
    return (
      <div className="relative">
        <QuestionList
          setScore={setScore}
          setFinished={setFinished}
          options={options}
        />
      </div>
    );
  }
};

export default App;
