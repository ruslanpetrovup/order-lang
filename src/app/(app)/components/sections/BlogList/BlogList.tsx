'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ApiDataPressList } from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function BlogList() {
  const [blogPosts, setBlogPosts] = useState<ApiDataPressList[]>([])

  const {
    pageData: { press },
  } = usePageData()

  useEffect(() => {
    if (!press) return
    setBlogPosts(press.pressList)
  }, [press])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  useEffect(() => {
    if (!autoplayEnabled || blogPosts.length === 0) return

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

  if (blogPosts.length === 0) return null

  return (
    <section className="bg-[#0d1627] py-32 relative">
      <div className="container mx-auto px-4 relative">
        <button
          onClick={() => handleManualNavigation(prevSlide)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-12 w-12" />
        </button>
        <button
          onClick={() => handleManualNavigation(nextSlide)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-12 w-12" />
        </button>

        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 2,
            ease: [0.1, 0, 0.2, 1],
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-[16px] max-w-[387px] mx-auto md:text-[16px] lg:text-1xl font-bold font-avenir-light text-white mb-8 leading-tight">
            {blogPosts[currentSlide].title}
          </h2>
          <p className="text-[20px] max-w-[572px] mx-auto font-bold text-white font-avenir-light mb-8 leading-relaxed">
            {blogPosts[currentSlide].description}
          </p>
          <a
            href={blogPosts[currentSlide].link.url}
            className="text-[20px] text-decoration-line: underline mx-auto font-bold text-white font-avenir-light text-white hover:text-white/80 transition-colors"
          >
            [Read More...]
          </a>
        </motion.div>

        <div className="flex justify-center gap-3 mt-12">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
