import { useState } from 'react'
import FeedbackSelector from './components/FeedbackSelector'
import ThankYou from './components/ThankYou'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  const [selectedScore, setSelectedScore] = useState(null)
  const [isSubmmitted, setIsSubmitted] = useState(false)

  const onClickScore = (score) => setSelectedScore(score)
  const onSubmit = () => selectedScore && setIsSubmitted(true)

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-neutral-dark-blue px-6 py-8 rounded-2xl w-[400px] h-[400px] overflow-hidden">
        <AnimatePresence>
          {isSubmmitted && (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: '50vw' }}
              exit={{ x: '-50vw' }}
            >
              <ThankYou selectedScore={selectedScore} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isSubmmitted && (
          <motion.div animate={{ x: 0 }} initial={{ x: 500 }}>
            <FeedbackSelector
              selectedScore={selectedScore}
              onClickScore={onClickScore}
              onSubmit={onSubmit}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default App
