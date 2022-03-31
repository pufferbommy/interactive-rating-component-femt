import StarIcon from '../assets/StarIcon'
import Button from '../components/Button'
import FeedbackScore from '../components/FeedbackScore'

const FeedbackSelector = ({ onClickScore, selectedScore, onSubmit }) => {
  const generateFeedbackScoreElements = () => {
    return Array.from(Array(5)).map((value, i) => (
      <FeedbackScore
        key={i + 1}
        onClickScore={onClickScore}
        isSelected={selectedScore === i + 1}
        score={i + 1}
      />
    ))
  }
  const FeedbackScoreElements = generateFeedbackScoreElements()

  return (
    <>
      <div className="inline-block p-4 rounded-full bg-neutral-medium-grey">
        <StarIcon />
      </div>
      <h1 className="mt-6 text-neutral-white text-2xl">How did we do?</h1>
      <p className="text-neutral-light-grey text-[15px] leading-relaxed mt-1.5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mt-6 mb-8 grid grid-cols-5 place-items-center">
        {FeedbackScoreElements}
      </div>
      <Button
        onClick={onSubmit}
        className="w-full bg-primary-orange hover:bg-neutral-white text-white hover:text-primary-orange rounded-full py-2 uppercase transition duration-300 ease-in-out"
      >
        Submit
      </Button>
    </>
  )
}

export default FeedbackSelector
