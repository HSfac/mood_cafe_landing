'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDownIcon, PlayIcon } from '@heroicons/react/24/outline'

const stats = [
  { number: '150+', label: '전국 매장수' },
  { number: '95%', label: '고객 만족도' },
  { number: '24개월', label: '평균 투자 회수기간' },
  { number: '200만원', label: '월 평균 순수익' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-20 container-width text-center text-white px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            자연이 주는
            <br />
            <span className="text-green-light">특별한 경험</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            신선하고 자연 친화적인 프리미엄 카페 프랜차이즈
            <br />
            깨끗하고 모던한 공간에서 최고 품질의 커피를 경험하세요
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/startup" className="btn-primary bg-white text-green-main hover:bg-gray-100 text-lg px-8 py-4">
              창업 상담 신청
            </Link>
            <button className="flex items-center space-x-3 text-white border-2 border-white/70 hover:border-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <PlayIcon className="h-5 w-5 ml-0.5 text-green-main" />
              </div>
              <span className="font-semibold text-lg">브랜드 영상 보기</span>
            </button>
          </motion.div>
        </motion.div>

        {/* 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm lg:text-base opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2 opacity-80">아래로 스크롤</span>
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* 장식 요소 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-green-light/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
    </section>
  )
} 