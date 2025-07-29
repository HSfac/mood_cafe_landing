'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const menuCategories = [
  { id: 'signature', name: '시그니처', active: true },
  { id: 'coffee', name: '커피', active: false },
  { id: 'non-coffee', name: '논커피', active: false },
  { id: 'dessert', name: '디저트', active: false },
]

const menuItems = {
  signature: [
    {
      name: '무드 시그니처 라떼',
      description: '특별한 유기농 원두와 프리미엄 우유의 완벽한 조화',
      price: '6,500원',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'BEST'
    },
    {
      name: '그린 모히토 프라페',
      description: '신선한 민트와 라임이 어우러진 상큼한 음료',
      price: '7,000원',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'NEW'
    },
    {
      name: '허니 오트 라떼',
      description: '자연 그대로의 꿀과 귀리의 고소한 맛',
      price: '6,000원',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'HOT'
    },
  ],
  coffee: [
    {
      name: '아메리카노',
      description: '깔끔하고 진한 에스프레소의 본연의 맛',
      price: '4,500원',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: ''
    },
    {
      name: '카페라떼',
      description: '부드러운 우유와 에스프레소의 황금비율',
      price: '5,500원',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: ''
    },
  ],
  'non-coffee': [
    {
      name: '얼 그레이 티',
      description: '향긋한 베르가못 향이 일품인 프리미엄 차',
      price: '5,000원',
      image: 'https://images.unsplash.com/photo-1597318181409-cf7d0b112d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: ''
    },
  ],
  dessert: [
    {
      name: '티라미수',
      description: '진한 커피 향과 부드러운 마스카포네 치즈',
      price: '7,500원',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: ''
    },
  ],
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('signature')
  const [currentSlide, setCurrentSlide] = useState(0)

  const currentItems = menuItems[activeCategory as keyof typeof menuItems]
  const itemsPerPage = 3
  const totalSlides = Math.ceil(currentItems.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentItems = () => {
    const start = currentSlide * itemsPerPage
    return currentItems.slice(start, start + itemsPerPage)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-deep mb-6">
            특별한 메뉴
            <br />
            <span className="text-gradient">자연의 맛</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            엄선된 재료로 만든 프리미엄 메뉴들
            <br />
            자연의 신선함을 그대로 담아냈습니다
          </p>
        </motion.div>

        {/* 카테고리 탭 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white rounded-full p-2 shadow-lg">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-main text-white shadow-lg'
                    : 'text-green-deep hover:text-green-main'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 메뉴 아이템들 */}
        <div className="relative">
          <AnimatePresence>
            <motion.div
              key={`${activeCategory}-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-2xl transition-shadow duration-300 group"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                        item.badge === 'BEST' ? 'bg-red-500' :
                        item.badge === 'NEW' ? 'bg-blue-500' : 'bg-orange-500'
                      }`}>
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-deep mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-main">
                        {item.price}
                      </span>
                      <button className="bg-green-main hover:bg-green-deep text-white px-6 py-2 rounded-lg transition-colors duration-200">
                        주문하기
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 네비게이션 버튼 */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-green-main hover:bg-green-main hover:text-white transition-all duration-200"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-green-main hover:bg-green-main hover:text-white transition-all duration-200"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* 페이지 인디케이터 */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-green-main' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 