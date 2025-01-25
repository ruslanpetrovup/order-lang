'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ApiDataPress } from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function Press() {
  const [data, setData] = useState<ApiDataPress>({ title: '', description: '', pressList: [] })
  const {
    pageData: { press },
  } = usePageData()

  useEffect(() => {
    if (!press) return
    setData(press)
  }, [press])

  if (!data?.description || !data?.title) return null

  return (
    <section className="bg-[#0d1627] py-32" id="press">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-open-sans text-white mb-8">{data?.title}</h2>
          <p className="text-1xl text-white max-w-[509px] mx-auto font-avenir-light leading-relaxed">
            {data?.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Press
