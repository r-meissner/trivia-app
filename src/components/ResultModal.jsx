import React from 'react'

const ResultModal = ({score, setFinished}) => {
  const handleRestart = () => {
    setFinished(false)
  }

  if (score===0) {
    return (
      <div className='fixed rounded-box bg-base-300 w-96 grid place-items-center p-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'>
        <h1 className='text-3xl my-2'>Better luck next time!</h1>
        <p>You scored no points.</p>
        <button className='btn btn-primary m-4' onClick={() => handleRestart()}>New Game</button>
      </div>
    )
  } else {return (
    <div className='fixed rounded-box bg-base-300 w-96 grid place-items-center p-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'>
      <h1 className='text-3xl my-2'>Congratulations!</h1>
      <p>{score==1 ? `You scored 1 point.` :`You scored ${score} points.`}</p>
      <button className='btn btn-primary m-4' onClick={() => handleRestart()}>New Game</button>
      </div>
  )
}}

  

export default ResultModal