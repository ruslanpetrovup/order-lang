import {
  ApiDataAbout,
  ApiDataBring,
  ApiDataContact,
  ApiDataFeatures,
  ApiDataHero,
  ApiDataHowItWorks,
  ApiDataPress,
  ApiDataReviews,
} from './api.types'

interface ServerActions {
  getHero: () => Promise<ApiDataHero>
  getBring: () => Promise<ApiDataBring>
  getFeatures: () => Promise<ApiDataFeatures>
  getPress: () => Promise<ApiDataPress>
  getReviews: () => Promise<ApiDataReviews>
  getContact: () => Promise<ApiDataContact>
  getAbout: () => Promise<ApiDataAbout>
  getHowItWorks: () => Promise<ApiDataHowItWorks>
}

interface StorybookPreview {
  serverActions?: ServerActions
}

declare global {
  interface Window {
    __STORYBOOK_PREVIEW__?: StorybookPreview
  }
}

export {}
