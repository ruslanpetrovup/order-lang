'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../../../context/LoadingContext'

const LoadingOverlay = () => {
  const { isLoading } = useLoading()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 to-teal-800"
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-white border-opacity-25 rounded-full animate-spin mb-4"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingOverlay
