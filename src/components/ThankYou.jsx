import IllustrationThankYou from '../assets/IllustrationThankYou'

const ThankYou = ({ selectedScore }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-2">
        <IllustrationThankYou />
      </div>
      <span className="bg-neutral-medium-grey text-primary-orange px-3 py-2 mt-6 rounded-full">
        You selected {selectedScore} out of 5
      </span>
      <span className="text-2xl mt-6 mb-2 text-white">Thank You!</span>
      <p className="text-center mb-2 text-neutral-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou
