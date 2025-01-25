'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import {
  ApiDataHeroAdditionalImages,
  ApiDataHeroCompanyImages,
  ApiDataHeroLinkImages,
} from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

interface HeroData {
  background: {
    url: string
    alt: string
  }
  title: string
  subtitle: string
  quote: string
  additionalImages: { url: string; alt: string }[]
  companyImages: {
    link: string
    image: { url: string; alt: string }
  }[]
  linkImages: {
    link: string
    image: { url: string; alt: string }
  }[]
}

function Hero() {
  const [data, setData] = useState<HeroData>({
    title: '',
    background: { url: '', alt: '' },
    subtitle: '',
    quote: '',
    additionalImages: [],
    linkImages: [],
    companyImages: [],
  })

  const {
    pageData: { hero },
  } = usePageData()

  useEffect(() => {
    if (!hero) return
    setData({
      ...hero,
      background: {
        url: hero?.background?.url || '',
        alt: hero?.background?.alt || '',
      },
      title: hero?.title || '',
      subtitle: hero?.subtitle || '',
      quote: hero?.quote || '',
      additionalImages: hero.additionalImages.map((item: ApiDataHeroAdditionalImages) => ({
        url: item?.image?.url || '',
        alt: item?.image?.alt || '',
      })),
      companyImages: hero.companyImages.map((item) => ({
        link: item?.link || '',
        image: {
          url: item?.image?.url || '',
          alt: item?.image?.alt || '',
        },
      })),
      linkImages: hero.linkImages.map((item) => ({
        link: item?.link || '',
        image: {
          url: item?.image?.url || '',
          alt: item?.image?.alt || '',
        },
      })),
    })
  }, [hero])

  if (
    !data?.background?.url ||
    !data?.title ||
    !data?.subtitle ||
    !data?.quote ||
    !data?.additionalImages?.length ||
    !data?.companyImages?.length ||
    !data?.linkImages?.length
  ) {
    return null
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 to-teal-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          {data?.background?.url && (
            <Image
              src={data?.background?.url ? SERVER_URL + data?.background?.url : ''}
              alt={data?.background?.alt || ''}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center pt-[357px] pb-[387px]">
        <div className="grid grid-cols-12 items-center w-full">
          <div className="col-span-4 text-white space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl lg:text-6xl font-bold"
            >
              {data?.title || ''}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl lg:text-2xl"
            >
              {data?.subtitle || ''}
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              {(data?.linkImages || []).map((linkImage: ApiDataHeroLinkImages, index: number) => (
                <a
                  key={index}
                  href={linkImage.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`${SERVER_URL}${linkImage?.image?.url}`}
                    alt={linkImage?.image?.alt}
                    width={164}
                    height={41}
                    className="h-[41px] w-auto"
                  />
                </a>
              ))}
            </div>

            <p
              className="text-[12px]"
              style={{
                marginTop: 5,
                fontFamily: 'var(--font-barlow-extralight)',
              }}
            >
              {data?.quote || ''}
            </p>
          </div>

          <div className="col-span-8 hidden lg:block relative pl-12">
            <div className="relative w-full aspect-[16/9] max-w-[900px]">
              {data?.additionalImages?.[1] && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute right-[-1%] top-[-1%] w-[90%] rounded-[10px] border-black border-[12px]"
                >
                  <Image
                    src={`${SERVER_URL}${data?.additionalImages[1]?.url}`}
                    alt={data?.additionalImages[1]?.alt}
                    width={708}
                    height={456}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}

              {data?.additionalImages?.[0] && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute left-[-10%] bottom-[-40%] w-[45%] z-10"
                >
                  <Image
                    src={`${SERVER_URL}${data?.additionalImages[0]?.url}`}
                    alt={data?.additionalImages[0]?.alt}
                    width={362}
                    height={489}
                    className="w-full h-auto"
                  />
                </motion.div>
              )}
            </div>
          </div>

          <div className="absolute bottom-8 right-8">
            {data.companyImages.length >= 2 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {data.companyImages
                  .slice(0, 2)
                  .map(
                    (item: ApiDataHeroCompanyImages, index: number) =>
                      item?.image?.url && (
                        <Image
                          key={index}
                          src={item.image.url}
                          alt={item.image.alt}
                          width={100}
                          height={50}
                          className="h-10 w-auto"
                        />
                      ),
                  )}
              </div>
            )}
            {data.companyImages.length >= 5 && (
              <div className="grid grid-cols-3 gap-8">
                {data.companyImages
                  .slice(2, 5)
                  .map(
                    (item: ApiDataHeroCompanyImages, index: number) =>
                      item?.image?.url && (
                        <Image
                          key={index}
                          src={item.image.url}
                          alt={item.image.alt}
                          width={100}
                          height={50}
                          className="h-10 w-auto"
                        />
                      ),
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
