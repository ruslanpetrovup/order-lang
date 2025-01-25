'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePageData } from '@/app/(app)/context/PageDataContext'

const Bring: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const [data, setData] = useState<{
    title: string
    subtitle: string
    description: string
    link: { label: string; url: string }
  }>({ title: '', subtitle: '', description: '', link: { label: '', url: '' } })

  const {
    pageData: { bring },
  } = usePageData()

  useEffect(() => {
    if (!bring) return
    setData(bring)
  }, [bring])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (
    !data?.title ||
    !data?.subtitle ||
    !data?.description ||
    !data?.link?.label ||
    !data?.link?.url
  )
    return null

  return (
    <section id="bring" className="py-20 px-4 md:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-[1156px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl leading-tight text-black font-open-sans font-semibold">
              {data?.title}
            </h1>
          </motion.div>

          <motion.div
            className="space-y-8 max-w-[372px] ml-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-1xl md:text-2xl font-medium text-black">{data?.subtitle}</h2>

            <p className="text-[16px] font-futura-light leading-relaxed text-black">
              {data?.description}
            </p>

            <a
              href={data?.link?.url}
              className="inline-block text-[rgba(0,0,0,0.8)] border border-[rgba(0,0,0,0.8)] px-6 py-3 rounded-md transition-colors transition-background duration-300 hover:bg-[#3a8088] hover:text-white"
            >
              {data?.link?.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Bring
