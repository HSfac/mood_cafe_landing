'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-main/10 to-green-light/20 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 숫자 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="text-[120px] md:text-[200px] font-bold text-green-main/20 leading-none">
            404
          </div>
        </motion.div>

        {/* 메인 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-green-deep mb-6">
            페이지를 찾을 수 없어요
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
          <p className="text-lg text-gray-500">
            아래 버튼을 통해 다른 페이지로 이동해보세요.
          </p>
        </motion.div>

        {/* 커피 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-green-main/10 rounded-full flex items-center justify-center">
              <div className="text-6xl">☕</div>
            </div>
            {/* 떠다니는 효과 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 text-green-main"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
              </svg>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-4 text-green-light"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* 액션 버튼들 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-main text-white font-semibold rounded-xl hover:bg-green-deep transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            홈으로 돌아가기
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-main text-green-main font-semibold rounded-xl hover:bg-green-main hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            이전 페이지로
          </button>
        </motion.div>

        {/* 추천 링크들 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-6">또는 아래 페이지들을 둘러보세요:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/brand"
              className="px-4 py-2 text-green-main hover:text-green-deep border border-green-main/30 rounded-lg hover:border-green-main transition-colors duration-200"
            >
              브랜드 소개
            </Link>
            <Link
              href="/menu"
              className="px-4 py-2 text-green-main hover:text-green-deep border border-green-main/30 rounded-lg hover:border-green-main transition-colors duration-200"
            >
              메뉴 보기
            </Link>
            <Link
              href="/stores"
              className="px-4 py-2 text-green-main hover:text-green-deep border border-green-main/30 rounded-lg hover:border-green-main transition-colors duration-200"
            >
              매장 찾기
            </Link>
            <Link
              href="/startup"
              className="px-4 py-2 text-green-main hover:text-green-deep border border-green-main/30 rounded-lg hover:border-green-main transition-colors duration-200"
            >
              창업 상담
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 