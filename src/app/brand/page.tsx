'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  SparklesIcon, 
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline'

const brandStory = [
  {
    year: '2020',
    title: 'Mood Cafe 탄생',
    description: '자연과 조화를 이루는 특별한 카페를 꿈꾸며 첫 매장을 오픈했습니다.',
    icon: CalendarIcon
  },
  {
    year: '2021',
    title: '친환경 인증 획득',
    description: '모든 제품에 유기농 재료를 사용하며 친환경 인증을 받았습니다.',
    icon: GlobeAltIcon
  },
  {
    year: '2022',
    title: '프랜차이즈 시작',
    description: '검증된 비즈니스 모델로 가맹사업을 시작했습니다.',
    icon: UsersIcon
  },
  {
    year: '2023',
    title: '100호점 돌파',
    description: '전국 100호점을 돌파하며 대한민국 대표 카페 브랜드로 성장했습니다.',
    icon: TrophyIcon
  },
]

const values = [
  {
    icon: GlobeAltIcon,
    title: '지속가능성',
    description: '환경을 생각하는 친환경 운영과 지속가능한 성장을 추구합니다.',
    color: 'text-green-main'
  },
  {
    icon: HeartIcon,
    title: '진정성',
    description: '고객과의 진심어린 소통과 정직한 서비스를 제공합니다.',
    color: 'text-red-500'
  },
  {
    icon: SparklesIcon,
    title: '혁신',
    description: '끊임없는 연구개발로 새로운 맛과 경험을 선사합니다.',
    color: 'text-blue-500'
  },
]

const achievements = [
  { title: '전국 매장수', value: '150+', unit: '개 매장' },
  { title: '고객 만족도', value: '95%', unit: '만족' },
  { title: '누적 방문자', value: '500만', unit: '명' },
  { title: '가맹점주 만족도', value: '98%', unit: '만족' },
]

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="relative h-[60vh] flex items-center justify-center text-gray-900">
          <div className="absolute inset-0 bg-white" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="relative z-10 text-center container-width px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              자연에서 시작된
              <br />
              <span className="text-green-light">특별한 이야기</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
            >
              Mood Cafe는 자연의 순수함을 담은 커피로
              <br />
              고객에게 특별한 경험을 선사합니다
            </motion.p>
          </div>
        </section>

        {/* 브랜드 스토리 */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-green-deep mb-6">
                브랜드 스토리
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                2020년부터 시작된 Mood Cafe의 성장 여정을 함께해보세요
              </p>
            </motion.div>

            <div className="relative">
              {/* 타임라인 라인 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-main/30 hidden md:block" />
              
              {brandStory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:px-8">
                    <div className={`p-6 bg-gray-50 rounded-2xl ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className="text-green-main font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-green-deep mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* 타임라인 노드 */}
                  <div className="hidden md:flex w-16 h-16 bg-green-main rounded-full items-center justify-center mx-4 z-10">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 브랜드 가치 */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-green-deep mb-6">
                우리의 가치
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mood Cafe가 추구하는 핵심 가치들입니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-deep mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 성과 지표 */}
        <section className="section-padding bg-green-main text-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                함께 만들어온 성과
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                고객과 가맹점주들과 함께 만들어온 소중한 성과들입니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-lg opacity-80 mb-2">
                    {achievement.unit}
                  </div>
                  <div className="text-sm opacity-70">
                    {achievement.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-green-main to-green-light rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">
                Mood Cafe와 함께 시작하세요
              </h3>
              <p className="text-xl mb-8 opacity-90">
                특별한 브랜드 가치를 함께 만들어갈 파트너를 찾습니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/startup"
                  className="btn-secondary bg-white text-green-main border-white hover:bg-gray-50"
                >
                  창업 상담 신청
                </a>
                <a
                  href="/franchise"
                  className="btn-secondary border-white text-white hover:bg-white/10"
                >
                  가맹점 정보 보기
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 