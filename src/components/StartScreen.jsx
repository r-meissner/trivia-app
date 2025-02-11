const StartScreen = ({setOptions, setStart}) => {

    const handleSelect = (event) => {
        const { name, value } = event.target;
        setOptions((prevOptions) => ({
          ...prevOptions,
          [name]: value.toLowerCase().replaceAll(" ","_"),
        }));
      };
    
    const handleStart = () => {
        setStart(true)
    }
  return (
    <div className='fixed flex flex-col justify-center w-96 p-10 rounded-box bg-base-300 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'>
      <h1 className="text-center text-primary text-3xl font-semibold my-4">Welcome to the Trivia Game!</h1>
      <p className="my-4">Customise what questions you will get with the options below.</p>
      <select name="categories" className="select select-primary w-full max-w-xs my-4" onChange={(e) => handleSelect(e)}>
        <option disabled selected>
          Category</option>
        <option>Music</option>
        <option>Sport and leisure</option>
        <option>Film and TV</option>
        <option>Arts and Literature</option>
        <option>History</option>
        <option>Society and Culture</option>
        <option>Science</option>
        <option>Geography</option>
        <option>Food and Drink</option>
        <option>General Knowledge</option>
      </select>
      <select name="difficulties" className="select select-primary w-full max-w-xs my-4" onChange={(e) => handleSelect(e)}>
        <option disabled selected>
          Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <button className="btn btn-primary max-w-fit mx-auto my-4" onClick={() => handleStart()}>Start</button>
    </div>
  );
};

export default StartScreen;
