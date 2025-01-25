import { RichTextNode } from '../utils/richTextFormatter'

export interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
}

// Hero
export interface ApiDataHeroLinkImages {
  link: string
  image: { url: string; alt: string }
}

export interface ApiDataHeroCompanyImages {
  link: string
  image: { url: string; alt: string }
}

export interface ApiDataHeroAdditionalImages {
  image: { url: string; alt: string }
}

export interface ApiDataHero {
  title: string
  subtitle: string
  background: { url: string; alt: string }
  linkImages: ApiDataHeroLinkImages[]
  companyImages: ApiDataHeroCompanyImages[]
  quote: string
  additionalImages: ApiDataHeroAdditionalImages[]
}

// Footer
export interface ApiDataFooterSocialLinks {
  icon: { url: string; alt: string }
  url: string
}
export interface ApiDataFooterLinks {
  label: string
  url: string
  icon: { url: string; alt: string }
}

export interface ApiDataFooter {
  title: string
  address: string
  city: string
  email: string
  copyright: string
  socialLinks: ApiDataFooterSocialLinks[]
  links: ApiDataFooterLinks[]
}

// Header

export interface ApiDataHeaderLinks {
  label: string
  icon: { url: string; alt: string }
  url: string
}

export interface ApiDataHeaderSubmenu {
  label: string
  url: string
}

export interface ApiDataHeaderNavigationLinks {
  label: string
  url: string
  submenu: ApiDataHeaderSubmenu[]
}

export interface ApiDataHeader {
  title: string
  logo: {
      url: string
      alt: string
  }
  links: ApiDataHeaderLinks[]
  navigationLinks: ApiDataHeaderNavigationLinks[]
}

// About
export interface ApiDataAbout {
  title: string
  subtitle: string
  background: { url: string; alt: string }
  description: RichTextNode
  link: { label: string; url: string }
}

// Press
export interface ApiDataPressList {
  title: string
  description: string
  link: { label: string; url: string }
}

export interface ApiDataPress {
  title: string
  description: string
  pressList: ApiDataPressList[]
}

// Contact
export interface ApiDataContact {
  title: string
  background: {
    url: string
    alt: string
  }
}

// Feature
export interface ApiDataFeaturesList {
  icon: {
    url: string
    alt: string
  }
  title: string
  description: string
}

export interface ApiDataFeatures {
  title: string
  background: { url: string; alt: string }
  description: RichTextNode
  featuresList: ApiDataFeaturesList[]
}

// How It Works
export interface ApiDataHowItWorksSteps {
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
}

export interface ApiDataHowItWorks {
  title: string
  steps: ApiDataHowItWorksSteps[]
}

// Reviews
export interface ApiDataReviewsEmployees {
  name: string
  position: string
}

export interface ApiDataReviews {
  title: string
  quote: string
  author: string
  employees: ApiDataReviewsEmployees[]
}

// Bring
export interface ApiDataBring {
  title: string
  subtitle: string
  description: string
  link: { label: string; url: string }
}
