'use client'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  ApiDataFooter,
  ApiDataFooterLinks,
  ApiDataFooterSocialLinks,
} from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

function Footer() {
  const [data, setData] = useState<ApiDataFooter>({
    title: '',
    address: '',
    city: '',
    email: '',
    copyright: '',
    socialLinks: [],
    links: [],
  })

  const {
    pageData: { footer },
  } = usePageData()

  useEffect(() => {
    if (footer) {
      setData(footer)
    }
  }, [footer])

  if (!data.title) return null

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="flex flex-col space-y-2">
          <a className="font-medium text-[20px] font-futura text-black mb-2">{data?.title || ''}</a>
          <p className="text-gray-600">{data?.address || ''}</p>
          <p className="text-gray-600">{data?.city || ''}</p>
          <p className="text-gray-600">{data?.email || ''}</p>

          <div className="flex space-x-2 pt-2">
            {(data?.socialLinks || []).map((socialLink: ApiDataFooterSocialLinks) =>
              socialLink?.icon?.url ? (
                <a href={socialLink.url} key={socialLink.icon.url} className="text-gray-600">
                  <Image
                    src={`${SERVER_URL}${socialLink.icon.url}`}
                    alt={socialLink.icon.alt}
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                <></>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col items-end mt-10 gap-[45px]">
          <div className="flex space-x-1 gap-[20px]">
            {(data?.links || []).map((link: ApiDataFooterLinks) =>
              link?.icon?.url ? (
                <a key={link.icon.url} href={link.url} target="_blank" rel="noreferrer">
                  <Image
                    src={`${SERVER_URL}${link.icon.url}`}
                    alt={link.icon.alt}
                    width={123}
                    height={41}
                  />
                </a>
              ) : (
                <></>
              ),
            )}
          </div>
          <p className="text-sm text-gray-600">{data?.copyright || ''}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
