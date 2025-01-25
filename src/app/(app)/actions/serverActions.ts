'use server'

import { SERVER_URL } from '../config/api.config'
import { ApiDataReviews } from '../types/api.types'

export async function getFeatures() {
  try {
    const response = await fetch(`${SERVER_URL}/api/features`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting features:', error)
    throw error
  }
}

export async function getReviews() {
  try {
    const response = await fetch(`${SERVER_URL}/api/reviews?depth=0`, {
      next: { revalidate: 3600 },
    })
    const data = await response.json()
    const reviewsList: ApiDataReviews[] = data.docs
    return reviewsList
  } catch (error) {
    console.error('Error getting reviews:', error)
    throw error
  }
}

export async function getAbout() {
  try {
    const response = await fetch(`${SERVER_URL}/api/about`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting about:', error)
    throw error
  }
}

export async function getBring() {
  try {
    const response = await fetch(`${SERVER_URL}/api/bring`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting bring:', error)
    throw error
  }
}

export async function getContact() {
  try {
    const response = await fetch(`${SERVER_URL}/api/contact`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting contact:', error)
    throw error
  }
}

export async function submitContact(formData: FormData) {
  try {
    const response = await fetch(`${SERVER_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}

export async function getFooter() {
  try {
    const response = await fetch(`${SERVER_URL}/api/footer`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting footer:', error)
    throw error
  }
}

export async function getHeader() {
  try {
    const response = await fetch(`${SERVER_URL}/api/header`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting header:', error)
    throw error
  }
}

export async function getHero() {
  try {
    const response = await fetch(`${SERVER_URL}/api/hero`, {
      cache: 'no-store',
    })
    return response.json()
  } catch (error) {
    console.error('Error getting hero:', error)
    throw error
  }
}

export async function getHowItWorks() {
  try {
    const response = await fetch(`${SERVER_URL}/api/how-it-works`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting how-it-works:', error)
    throw error
  }
}

export async function getPress() {
  try {
    const response = await fetch(`${SERVER_URL}/api/press`, { next: { revalidate: 3600 } })
    return response.json()
  } catch (error) {
    console.error('Error getting press:', error)
    throw error
  }
}
