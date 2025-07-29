'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon,
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const regions = [
  {
    name: '서울/경기',
    stores: 85,
    growth: '+12%',
    color: 'bg-green-main'
  },
  {
    name: '부산/경남',
    stores: 28,
    growth: '+8%',
    color: 'bg-green-light'
  },
  {
    name: '대구/경북',
    stores: 15,
    growth: '+15%',
    color: 'bg-green-mint'
  },
  {
    name: '기타 지역',
    stores: 22,
    growth: '+20%',
    color: 'bg-green-deep'
  },
]

const storeTypes = [
  {
    type: '프리미엄 매장',
    size: '30-40평',
    investment: '8,000만원',
    description: '대형 매장으로 다양한 메뉴와 넓은 공간을 제공',
    features: ['카페+베이커리', '프라이빗 룸', '이벤트 공간'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    type: '스탠다드 매장',
    size: '20-30평',
    investment: '5,000만원',
    description: '표준형 매장으로 가장 인기있는 매장 형태',
    features: ['기본 메뉴 구성', '테이크아웃 전용', '효율적 운영'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    type: '컴팩트 매장',
    size: '10-20평',
    investment: '3,000만원',
    description: '소형 매장으로 초기 투자 부담을 최소화',
    features: ['핵심 메뉴', '테이크아웃 중심', '키오스크 운영'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
]

const topStores = [
  {
    name: '강남점',
    address: '서울시 강남구 테헤란로 123',
    owner: '김사장',
    openYear: '2021',
    monthlyRevenue: '4,200만원',
    rating: 4.9,
    specialties: ['시그니처 라떼', '디저트'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: '해운대점',
    address: '부산시 해운대구 해운대로 456',
    owner: '이사장',
    openYear: '2022',
    monthlyRevenue: '3,800만원',
    rating: 4.8,
    specialties: ['모히토 프라페', '오션뷰'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: '홍대점',
    address: '서울시 마포구 홍익로 789',
    owner: '박대표',
    openYear: '2021',
    monthlyRevenue: '3,500만원',
    rating: 4.7,
    specialties: ['허니 오트 라떼', '젊은 분위기'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
]

export default function FranchisePage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="relative z-10 text-center container-width px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              전국 150개 매장
              <br />
              <span className="text-green-light">성공하는 파트너</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              검증된 비즈니스 모델과 지속적인 지원으로
              <br />
              함께 성장하는 Mood Cafe 가맹점들을 만나보세요
            </motion.p>
          </div>
        </section>

        {/* 지역별 현황 */}
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
                전국 가맹점 현황
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                전국 주요 지역에서 성공적으로 운영 중인 Mood Cafe 매장들
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 ${region.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold`}>
                    {region.stores}
                  </div>
                  <h3 className="text-lg font-semibold text-green-deep mb-2">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">매장수</p>
                  <div className="text-green-main font-semibold">
                    전년 대비 {region.growth}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 매장 유형별 안내 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-green-deep mb-6">
                매장 유형별 선택
              </h3>
              <p className="text-xl text-gray-600">
                입지와 투자 규모에 맞는 최적의 매장 유형을 선택하세요
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {storeTypes.map((store, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={store.image}
                    alt={store.type}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-green-deep mb-2">
                      {store.type}
                    </h4>
                    <div className="text-green-main font-bold text-lg mb-2">
                      {store.investment}
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      매장 규모: {store.size}
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      {store.description}
                    </p>
                    <div className="space-y-2">
                      {store.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircleIcon className="h-4 w-4 text-green-main mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 우수 매장 소개 */}
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
                우수 매장 소개
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                높은 수익과 만족도를 자랑하는 성공 매장들을 소개합니다
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topStores.map((store, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xl font-semibold text-green-deep">
                        {store.name}
                      </h4>
                      <div className="flex items-center text-yellow-500">
                        ⭐ {store.rating}
                      </div>
                    </div>
                    <div className="text-green-main font-bold text-lg mb-2">
                      월 매출 {store.monthlyRevenue}
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        {store.address}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        {store.openYear}년 오픈 · {store.owner}님 운영
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-xs text-gray-500 mb-1">특화 메뉴:</p>
                      <div className="flex flex-wrap gap-1">
                        {store.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="bg-green-main/10 text-green-deep text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="section-padding bg-green-main text-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-6">
                성공하는 가맹점이 되어보세요
              </h3>
              <p className="text-xl mb-8 opacity-90">
                검증된 브랜드와 함께 안정적인 수익을 만들어보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/startup"
                  className="btn-secondary bg-white text-green-main border-white hover:bg-gray-50"
                >
                  창업 상담 신청
                </a>
                <a
                  href="/stores"
                  className="btn-secondary border-white text-white hover:bg-white/10"
                >
                  매장 찾기
                </a>
                <a
                  href="/contact"
                  className="btn-secondary border-white text-white hover:bg-white/10"
                >
                  문의하기
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