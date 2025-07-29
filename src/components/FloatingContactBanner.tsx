'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PhoneIcon, 
  ChatBubbleLeftRightIcon, 
  XMarkIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function FloatingContactBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-green-main to-green-light text-white shadow-2xl border-t border-green-light/30"
        >
          <div className="container-width px-4 py-3">
            <div className="flex items-center justify-between">
              {/* 메시지 */}
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">
                    무료 창업 상담 받아보세요!
                  </div>
                  <div className="text-xs md:text-sm opacity-90">
                    전문가가 1:1로 맞춤 컨설팅을 해드립니다
                  </div>
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex items-center space-x-2">
                {/* 전화 버튼 */}
                <a
                  href="tel:1588-0000"
                  className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors duration-200 backdrop-blur-sm"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span className="hidden sm:inline text-sm font-medium">전화</span>
                </a>

                {/* 문의 버튼 */}
                <Link
                  href="/contact"
                  className="flex items-center space-x-1 bg-white text-green-main hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200 font-semibold text-sm"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  <span>문의하기</span>
                </Link>

                {/* 닫기 버튼 */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  aria-label="배너 닫기"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 애니메이션 효과 */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/60 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
} 