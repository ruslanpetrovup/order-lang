'use client'
import { createContext, useContext, ReactNode, useState } from 'react'
import {
  ApiDataAbout,
  ApiDataBring,
  ApiDataContact,
  ApiDataFeatures,
  ApiDataFooter,
  ApiDataHeader,
  ApiDataHero,
  ApiDataHowItWorks,
  ApiDataPress,
  ApiDataReviews,
} from '../types/api.types'

interface PageData {
  hero: ApiDataHero
  bring: ApiDataBring
  features: ApiDataFeatures
  press: ApiDataPress
  reviews: ApiDataReviews[]
  contact: ApiDataContact
  about: ApiDataAbout
  howItWorks: ApiDataHowItWorks
  footer: ApiDataFooter
  header: ApiDataHeader
}

const DefaultData = {
  hero: {
    title: '',
    background: { url: '', alt: '' },
    subtitle: '',
    quote: '',
    additionalImages: [],
    linkImages: [],
    companyImages: [],
  },
  bring: { title: '', subtitle: '', description: '', link: { label: '', url: '' } },
  features: {
    title: '',
    background: { url: '', alt: '' },
    description: { root: { type: 'root', children: [] } },
    featuresList: [],
  },
  press: { title: '', description: '', pressList: [] },
  reviews: [],
  contact: {
    title: '',
    background: { url: '', alt: '' },
  },
  about: {
    title: '',
    subtitle: '',
    background: {
      url: '',
      alt: '',
    },
    description: { root: { type: 'root', children: [] } },
    link: { label: '', url: '' },
  },
  howItWorks: { title: '', steps: [] },
  footer: {
    title: '',
    address: '',
    city: '',
    email: '',
    copyright: '',
    socialLinks: [],
    links: [],
  },
  header: {
    title: '',
    logo: {
      url: '',
      alt: '',
    },
    links: [],
    navigationLinks: [],
  },
}

interface PageDataContextType {
  setPageData: (data: PageData) => void
  pageData: PageData
}

const PageDataContext = createContext<PageDataContextType>({
  setPageData: () => {},
  pageData: DefaultData,
})

export const PageDataProvider = ({ children }: { children: ReactNode }) => {
  const [pageData, setPageData] = useState<PageDataContextType['pageData']>(DefaultData)

  return (
    <PageDataContext.Provider value={{ pageData, setPageData }}>
      {children}
    </PageDataContext.Provider>
  )
}

export const usePageData = () => useContext(PageDataContext)
