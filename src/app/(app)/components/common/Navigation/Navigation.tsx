'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SERVER_URL } from '@/app/(app)/config/api.config'
import { ApiDataHeaderNavigationLinks, ApiDataHeaderSubmenu } from '@/app/(app)/types/api.types'
import { usePageData } from '@/app/(app)/context/PageDataContext'

interface NavigationData {
  title: string
  logo: {
    url: string
    alt: string
  }
  navigationLinks: {
    name: string
    href: string
    submenu: { name: string; href: string }[]
  }[]
}

function Navigation() {
  const location = usePathname()
  const submenuRef = useRef<HTMLDivElement>(null)
  const [menuPosition, setMenuPosition] = useState<'left' | 'right'>('left')

  const [data, setData] = useState<NavigationData>({
    title: '',
    logo: {
      url: '',
      alt: '',
    },
    navigationLinks: [],
  })

  const {
    pageData: { header },
  } = usePageData()

  const fetchNavItems = async () => {
    try {
      if (!header) return
      const formattedNavItems = (header?.navigationLinks || []).map(
        (item: ApiDataHeaderNavigationLinks) => ({
          name: item.label,
          href: item.url,
          submenu: item.submenu.map((subItem: ApiDataHeaderSubmenu) => ({
            name: subItem.label,
            href: subItem.url,
          })),
        }),
      )
      setData({ ...header, navigationLinks: formattedNavItems })
    } catch (error) {
      console.error('Failed to fetch navigation items:', error)
    }
  }

  useEffect(() => {
    fetchNavItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header])

  useEffect(() => {
    if (data.navigationLinks.length === 0) return

    const checkPosition = () => {
      if (submenuRef.current) {
        const rect = submenuRef.current.getBoundingClientRect()
        const isOffScreen = rect.right > window.innerWidth
        setMenuPosition(isOffScreen ? 'right' : 'left')
      }
    }

    checkPosition()
    window.addEventListener('resize', checkPosition)
    return () => window.removeEventListener('resize', checkPosition)
  }, [data.navigationLinks])

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.slice(2))
    if (section) {
      const headerHeight = 84
      const offset = section.offsetTop - headerHeight
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  const renderSubmenuItems = (submenuItems: { name: string; href: string }[]) => (
    <div className="py-2">
      {(submenuItems || []).map((subItem: { name: string; href: string }) => (
        <button
          key={subItem.name}
          onClick={() => handleScrollToSection(subItem.href)}
          className="block w-full text-left px-4 py-2 text-white text-[16px] hover:text-[#B3DADE] hover:bg-[rgba(179,218,222,0.1)] transition-colors"
        >
          {subItem.name}
        </button>
      ))}
    </div>
  )

  const renderNavItem = (item: {
    name: string
    href: string
    submenu: { name: string; href: string }[]
  }) => {
    const hasSubmenu = item.submenu.length > 0

    if (hasSubmenu) {
      return (
        <div key={item?.name || ''} className="relative group">
          <button className="text-white text-[16px] hover:text-[#B3DADE] transition-colors">
            {item?.name || ''}
          </button>
          <div
            ref={submenuRef}
            className={`absolute mt-2 w-48 bg-[rgb(22,22,53)] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
              menuPosition === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            {renderSubmenuItems(item?.submenu || [])}
          </div>
        </div>
      )
    }

    return (
      <button
        key={item?.name || ''}
        onClick={() => handleScrollToSection(item?.href || '')}
        className={`text-white text-[16px] transition-colors ${
          location === item?.href ? 'text-[#B3DADE]' : 'hover:text-[#B3DADE]'
        }`}
      >
        {item?.name || ''}
      </button>
    )
  }

  if (!data?.navigationLinks || !data?.navigationLinks.length) return null

  return (
    <nav className="fixed w-full bg-[rgb(22,22,53)] z-40">
      <div className="container mx-auto px-4 py-2.5">
        <div
          className={`flex items-center ${data?.logo?.url ? 'justify-between' : 'justify-end'} h-16`}
        >
          <Image
            src={'https://order-lang.onrender.com/api/media/file/facebook-1.png'}
            width={30}
            height={30}
            alt="test"
          />
          {data?.logo?.url && (
            <Image
              src={`${SERVER_URL}${data?.logo?.url}`}
              alt={data?.logo?.alt || ''}
              width={76}
              height={78}
              style={{
                maskImage:
                  "url(\"data:image/svg+xml,%3Csvg preserveAspectRatio='none' data-bbox='20 20 160 160' viewBox='20 20 160 160' height='200' width='200' xmlns='http://www.w3.org/2000/svg' data-type='shape'%3E%3Cg%3E%3Cpath d='M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z'/%3E%3C/g%3E%3C/svg%3E%0A\")",
                WebkitMaskSize: '100% 100%',
                WebkitMaskImage:
                  "url(\"data:image/svg+xml,%3Csvg preserveAspectRatio='none' data-bbox='20 20 160 160' viewBox='20 20 160 160' height='200' width='200' xmlns='http://www.w3.org/2000/svg' data-type='shape'%3E%3Cg%3E%3Cpath d='M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z'/%3E%3C/g%3E%3C/svg%3E%0A\")",
                maskRepeat: 'no-repeat',
              }}
            />
          )}

          <div className={`hidden md:flex space-x-8`}>
            {(data?.navigationLinks || []).map(renderNavItem)}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
