import React, { useState } from "react";
import QuestionList from "./components/QuestionList";
import ResultModal from "./components/ResultModal";
import StartScreen from "./components/StartScreen";

const App = () => {
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(false)

  if (finished === true) {
    return (
      <div className="relative">
        <ResultModal score={score} setFinished={setFinished}/>
      </div>
    );
  } 
/*   else if (start===false) {
    return <StartScreen setStart={setStart}/>
  }  */
  else {
    return (
      <div className="relative">
        <QuestionList setScore={setScore} setFinished={setFinished}/>
      </div>
    );
  }
};

export default App;
