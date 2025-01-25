'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ApiDataHowItWorks } from '@/app/(app)/types/api.types'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import { usePageData } from '@/app/(app)/context/PageDataContext'

export const HowItWorks = () => {
  const [data, setData] = useState<ApiDataHowItWorks>({ title: '', steps: [] })

  const {
    pageData: { howItWorks },
  } = usePageData()

  useEffect(() => {
    if (!howItWorks) return
    setData(howItWorks)
  }, [howItWorks])

  if (!data?.title || !data?.steps || data.steps.length === 0) return null

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-[42px] text-black font-bold mb-14 text-left">{data?.title}</h2>

        {data.steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-between ${
              index !== data.steps.length - 1 ? 'mb-40' : ''
            }`}
          >
            <motion.div
              className={`lg:w-[40%] mb-12 lg:mb-0 ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="text-black text-sm font-light">
                  /{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-3xl text-black font-medium leading-tight mb-6">{step.title}</h3>
              <p className="text-black max-w-[372px] text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>

            <div className={`lg:w-[55%] ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={step?.image?.url ? SERVER_URL + step?.image?.url : ''}
                  alt={`Step ${index + 1} illustration`}
                  width={index % 2 === 0 ? 455 : 600}
                  height={index % 2 === 0 ? 540 : 400}
                  className={`${
                    index % 2 === 0
                      ? 'max-w-[455px] h-auto object-contain'
                      : 'w-full h-auto object-contain'
                  }`}
                  priority={index === 0}
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
