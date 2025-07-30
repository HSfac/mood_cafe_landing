'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  ClockIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline'

const stores = [
  {
    id: 1,
    name: '강남점',
    address: '서울시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    hours: '07:00 - 22:00',
    features: ['Wi-Fi', '주차가능', '단체석', '테라스'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '서울',
    subway: '강남역 2번 출구 도보 3분',
    rating: 4.9
  },
  {
    id: 2,
    name: '해운대점',
    address: '부산시 해운대구 해운대로 456',
    phone: '051-2345-6789',
    hours: '08:00 - 23:00',
    features: ['Wi-Fi', '오션뷰', '야외테라스', '펜트하우스'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '부산',
    subway: '해운대역 1번 출구 도보 5분',
    rating: 4.8
  },
  {
    id: 3,
    name: '홍대점',
    address: '서울시 마포구 홍익로 789',
    phone: '02-3456-7890',
    hours: '09:00 - 24:00',
    features: ['Wi-Fi', '24시간', '스터디룸', '보드게임'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '서울',
    subway: '홍대입구역 9번 출구 도보 2분',
    rating: 4.7
  },
  {
    id: 4,
    name: '동성로점',
    address: '대구시 중구 동성로 2가 101',
    phone: '053-4567-8901',
    hours: '08:00 - 22:00',
    features: ['Wi-Fi', '주차가능', '프라이빗룸', '회의실'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '대구',
    subway: '반월당역 18번 출구 도보 7분',
    rating: 4.6
  },
  {
    id: 5,
    name: '천안점',
    address: '충남 천안시 서북구 불당대로 202',
    phone: '041-5678-9012',
    hours: '07:30 - 21:30',
    features: ['Wi-Fi', '주차가능', '키즈존', '드라이브스루'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '충남',
    subway: '천안역 서부광장 도보 10분',
    rating: 4.5
  },
  {
    id: 6,
    name: '전주점',
    address: '전북 전주시 완산구 팔달로 303',
    phone: '063-6789-0123',
    hours: '08:00 - 22:00',
    features: ['Wi-Fi', '한옥뷰', '전통차', '문화공간'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    region: '전북',
    subway: '전주역 동부광장 도보 15분',
    rating: 4.4
  },
]

const regions = ['전체', '서울', '부산', '대구', '충남', '전북']

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center container-width px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              가까운 매장 찾기
              <br />
              <span className="text-green-light">Mood Cafe</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              전국 150개 매장에서 특별한 커피 경험을 만나보세요
            </motion.p>
          </div>
        </section>

        {/* 검색 및 필터 */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* 검색바 */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="지역, 매장명으로 검색하세요"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent"
                  />
                </div>
                <button className="btn-primary whitespace-nowrap">
                  검색
                </button>
              </div>

              {/* 지역 필터 */}
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                      region === '전체' 
                        ? 'bg-green-main text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-green-main/10 hover:text-green-main'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 매장 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stores.map((store, index) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image
                      src={store.image}
                      alt={store.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-main text-white px-3 py-1 rounded-full text-sm font-medium">
                      {store.region}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center">
                      ⭐ {store.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-deep mb-3">
                      {store.name}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start text-gray-600">
                        <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm">{store.address}</div>
                          <div className="text-xs text-gray-500">{store.subway}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{store.phone}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <ClockIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{store.hours}</span>
                      </div>
                    </div>
                    
                    {/* 매장 특징 */}
                    <div className="border-t pt-4">
                      <div className="flex flex-wrap gap-1">
                        {store.features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-green-main/10 text-green-deep text-xs px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* 액션 버튼 */}
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-green-main text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-deep transition-colors duration-200">
                        길찾기
                      </button>
                      <button className="flex-1 border border-green-main text-green-main py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-main/5 transition-colors duration-200">
                        전화하기
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 더보기 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="btn-secondary">
                더 많은 매장 보기
              </button>
            </motion.div>
          </div>
        </section>

        {/* 지도 섹션 (플레이스홀더) */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-green-deep mb-4">
                지도에서 찾기
              </h2>
              <p className="text-gray-600">
                지도에서 가까운 Mood Cafe 매장을 확인하세요
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPinIcon className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg">지도 API 연동 예정</p>
                <p className="text-sm">카카오맵 또는 구글맵을 통해 매장 위치를 확인할 수 있습니다</p>
              </div>
            </motion.div>
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
                우리 동네에도 Mood Cafe가!
              </h3>
              <p className="text-xl mb-8 opacity-90">
                새로운 매장 오픈 소식과 이벤트 정보를 받아보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/startup"
                  className="btn-secondary bg-white text-green-main border-white hover:bg-gray-50"
                >
                  가맹점 개설 문의
                </a>
                <a
                  href="/contact"
                  className="btn-secondary bg-white/20 border-white text-white hover:bg-white/30 backdrop-blur-sm"
                >
                  매장 제안하기
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