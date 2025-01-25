'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ContactFormData } from '../../../services/contact.service'
import { submitContact } from '../../../actions/serverActions'
import Image from 'next/image'
import { ApiDataContact } from '@/app/(app)/types/api.types'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function Contact() {
  const [data, setData] = useState<ApiDataContact>({
    title: '',
    background: { url: '', alt: '' },
  })

  const {
    pageData: { contact },
  } = usePageData()

  useEffect(() => {
    if (!contact) return
    setData(contact)
  }, [contact])

  const [formState, setFormState] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value)
      })

      await submitContact(formData)
      setFormState({ firstName: '', lastName: '', email: '', message: '' })
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!data?.title) return null

  return (
    <section
      id="contact"
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

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-medium font-open-sans leading-tight mb-8">
              {data?.title || ''}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 max-w-[450px]">
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-white text-base font-avenir">First Name *</label>
                  <input
                    type="text"
                    value={formState.firstName}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                    className={`w-full bg-transparent border-b py-2 text-white focus:outline-none transition-colors
                      ${
                        isSubmitting && !formState.firstName
                          ? 'border-red-500'
                          : 'border-white focus:border-white'
                      }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-base font-avenir">Last Name *</label>
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                    className={`w-full bg-transparent border-b py-2 text-white focus:outline-none transition-colors
                      ${
                        isSubmitting && !formState.lastName
                          ? 'border-red-500'
                          : 'border-white focus:border-white'
                      }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-base font-avenir">Email *</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className={`w-full bg-transparent border-b py-2 text-white focus:outline-none transition-colors
                    ${
                      isSubmitting && !formState.email
                        ? 'border-red-500'
                        : 'border-white focus:border-white'
                    }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-base font-avenir">Leave us a message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className=" w-[150px] py-2 bg-transparent rounded-[2px] border border-white font-futura text-white hover:bg-white transition-colors hover:text-black"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
