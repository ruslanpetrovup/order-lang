'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { formatRichText } from '../../../utils/richTextFormatter'
import { ApiDataAbout } from '@/app/(app)/types/api.types'
import Image from 'next/image'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function About() {
  const [data, setData] = useState<ApiDataAbout>({
    title: '',
    subtitle: '',
    background: {
      url: '',
      alt: '',
    },
    description: { root: { type: 'root', children: [] } },
    link: { label: '', url: '' },
  })

  const {
    pageData: { about },
  } = usePageData()
  useEffect(() => {
    if (!about) return
    setData(about)
  }, [about])

  if (
    !data?.title ||
    !data?.subtitle ||
    !data?.background?.url ||
    !data?.description ||
    !data?.link?.label ||
    !data?.link?.url
  )
    return null

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 to-teal-800 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          {data?.background?.url && (
            <Image
              src={SERVER_URL + data?.background?.url}
              alt={data?.background?.alt || ''}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-white text-5xl font-medium text-open-sans mb-8">
              {data?.title || ''}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-[383px] space-y-6"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl max-w-[383px] font-medium mb-8">{data?.subtitle || ''}</h2>

            {data?.description && formatRichText(data.description)}

            {data?.link && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Link
                  href={data?.link?.url || '#'}
                  className="flex justify-center border border-[#B3B3D] max-w-[308px] w-full mt-8 px-8 py-3 bg-[#42419E]/70 hover:bg-[#9E9E42]/90 text-white rounded-full transition-colors duration-300 shadow-[2.12px_2.12px_10px_#161635]"
                >
                  {data?.link?.label || ''}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
