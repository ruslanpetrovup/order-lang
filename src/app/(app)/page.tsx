'use client'
import { useEffect, useState } from 'react'
import { useLoading } from './context/LoadingContext'
import Hero from './components/sections/Hero/Hero'
import Bring from './components/sections/Bring/Bring'
import Features from './components/sections/Features/Features'
import Press from './components/sections/Press/Press'
import Reviews from './components/sections/Reviews/Reviews'
import About from './components/sections/About/About'
import Contact from './components/sections/Contact/Contact'
import BlogList from './components/sections/BlogList/BlogList'
import HowItWorks from './components/sections/HowItWorks/HowItWorks'
import {
  getAbout,
  getBring,
  getContact,
  getFeatures,
  getFooter,
  getHeader,
  getHero,
  getHowItWorks,
  getPress,
  getReviews,
} from './actions/serverActions'
import { revalidateData } from './utils/revalidate'
import { usePageData } from './context/PageDataContext'

export default function Home() {
  const { setIsLoading } = useLoading()
  const { setPageData } = usePageData()
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    const loadAllData = async () => {
      setIsLoading(true)
      try {
        await revalidateData()
        const [
          heroData,
          bringData,
          featuresData,
          pressData,
          reviewsData,
          contactData,
          aboutData,
          howItWorksData,
          footerData,
          headerData,
        ] = await Promise.all([
          getHero(),
          getBring(),
          getFeatures(),
          getPress(),
          getReviews(),
          getContact(),
          getAbout(),
          getHowItWorks(),
          getFooter(),
          getHeader(),
        ])

        setPageData({
          hero: heroData,
          bring: bringData,
          features: featuresData,
          press: pressData,
          reviews: reviewsData,
          contact: contactData,
          about: aboutData,
          howItWorks: howItWorksData,
          footer: footerData,
          header: headerData,
        })
        setDataLoaded(true)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleLoad = () => {
      if (dataLoaded) {
        setIsLoading(false)
      }
    }

    if (document.readyState === 'complete' && dataLoaded) {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [dataLoaded, setIsLoading])

  return (
    <main>
      <Hero />
      <Bring />
      <Features />
      <Press />
      <BlogList />
      <HowItWorks />
      <About />
      <Reviews />
      <Contact />
    </main>
  )
}
