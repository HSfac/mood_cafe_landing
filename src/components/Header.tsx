'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: '홈', href: '/' },
  { name: '브랜드', href: '/brand' },
  { name: '메뉴', href: '/menu' },
  { name: '가맹점', href: '/franchise' },
  { name: '창업안내', href: '/startup' },
  { name: '매장찾기', href: '/stores' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    )}>
      <nav className="container-width">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* 로고 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-main to-green-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Mood Cafe
              </span>
            </Link>
          </motion.div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-800 hover:text-green-main font-semibold transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-main transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link href="/contact" className="btn-primary bg-green-main hover:bg-green-deep text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
              가맹 문의
            </Link>
          </motion.div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-green-main/10 hover:text-green-main transition-colors duration-200"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-800 hover:text-green-main hover:bg-green-main/10 font-semibold transition-colors duration-200 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                  className="px-4 pt-4"
                >
                  <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block bg-green-main hover:bg-green-deep text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    가맹 문의
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 