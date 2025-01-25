'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import { ApiDataFeatures, ApiDataFeaturesList } from '@/app/(app)/types/api.types'
import { formatRichText } from '@/app/(app)/utils/richTextFormatter'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function Features() {
  const [data, setData] = useState<ApiDataFeatures>({
    title: '',
    background: { url: '', alt: '' },
    description: { root: { type: 'root', children: [] } },
    featuresList: [],
  })

  const {
    pageData: { features },
  } = usePageData()

  useEffect(() => {
    if (!features) return
    setData(features)
  }, [features])

  if (!data?.title || !data?.background?.url || !data?.description || !data?.featuresList?.length)
    return null

  return (
    <section className="relative py-32" id="features">
      <div className="absolute inset-0 z-0">
        {data?.background?.url && (
          <Image
            src={SERVER_URL + data?.background?.url}
            alt={data?.background?.alt || ''}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <h2 className="text-5xl font-open-sans font-semi text-left text-white mb-6">
            {data?.title || ''}
          </h2>

          {data?.description && formatRichText(data.description, { maxWidth: 500 })}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {(data?.featuresList || []).map((feature: ApiDataFeaturesList, index: number) => (
            <motion.div
              key={feature?.title || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-white"
            >
              <div className="mb-6">
                <Image
                  src={`${SERVER_URL}${feature?.icon?.url}`}
                  alt={feature?.title}
                  width={25}
                  height={25}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-futura-light mb-4">{feature?.title || ''}</h3>
              <p className="text-white/80 leading-relaxed font-avenir-light">
                {feature?.description || ''}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
