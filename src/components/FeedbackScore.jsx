import React from 'react'

const FeedbackScore = ({ score, onClickScore, isSelected }) => {
  return (
    <div
      onClick={() => onClickScore(score)}
      className={`w-12 h-12 rounded-full font-bold flex justify-center items-center text-neutral-light-grey bg-neutral-medium-grey hover:bg-primary-orange hover:text-neutral-white transition duration-300 ease-in-out cursor-pointer ${
        isSelected && 'text-neutral-white bg-neutral-light-grey'
      }`}
    >
      {score}
    </div>
  )
}

export default FeedbackScore
