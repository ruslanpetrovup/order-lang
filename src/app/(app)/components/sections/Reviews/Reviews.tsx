'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import quote from '../../../assets/quote.svg'
import { ApiDataReviews } from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function Reviews() {
  const [reviews, setReviews] = useState<ApiDataReviews[]>([])

  const { pageData } = usePageData()

  useEffect(() => {
    if (!pageData.reviews) return
    setReviews(pageData.reviews)
  }, [pageData.reviews])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (!autoplayEnabled || reviews.length === 0) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, autoplayEnabled])

  const handleManualNavigation = (action: () => void) => {
    setAutoplayEnabled(false)
    action()
  }

  if (!reviews || !reviews.length) return null
  return (
    <section
      id="reviews"
      className="bg-gradient-to-br from-[#3a8088] to-[#3a8088]/90 py-24 relative"
    >
      <div className="container mx-auto px-4 relative">
        <button
          onClick={() => handleManualNavigation(prevSlide)}
          className="absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Previous review"
        >
          <ChevronLeftIcon className="h-12 w-12" />
        </button>
        <button
          onClick={() => handleManualNavigation(nextSlide)}
          className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Next review"
        >
          <ChevronRightIcon className="h-12 w-12" />
        </button>

        {reviews.length > 0 && (
          <>
            {' '}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.1, 0, 0.2, 1],
              }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="text-6xl mb-8 flex justify-center">
                <Image src={quote} alt="Quote" width={37} height={30} />
              </div>

              <p className="max-w-[790px] mx-auto md:text-4xl font-normal italic mb-12 leading-relaxed">
                {reviews[currentSlide]?.quote}
              </p>

              <div className="space-y-0.1">
                <p className="text-xl font-bold font-['Arial']">{reviews[currentSlide]?.author}</p>
                {reviews[currentSlide]?.employees?.map((employee, index) => (
                  <p
                    key={`${employee.name}-${index}`}
                    className="text-lg text-white font-open-sans italic"
                  >
                    {employee?.position} - {employee?.name}
                  </p>
                ))}
              </div>
            </motion.div>
            <div className="flex justify-center gap-3 mt-16">
              {reviews.length > 0 &&
                reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-2'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Reviews
