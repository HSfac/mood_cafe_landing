'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  StarIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: GlobeAltIcon,
    title: '자연 친화적',
    description: '유기농 원두와 친환경 재료로 만드는 건강한 음료',
    color: 'text-green-main'
  },
  {
    icon: SparklesIcon,
    title: '프리미엄 품질',
    description: '엄선된 원두와 최첨단 장비로 완성하는 완벽한 맛',
    color: 'text-blue-500'
  },
  {
    icon: HeartIcon,
    title: '따뜻한 공간',
    description: '편안하고 아늑한 분위기에서 즐기는 특별한 시간',
    color: 'text-red-500'
  },
  {
    icon: StarIcon,
    title: '차별화된 서비스',
    description: '개인 맞춤형 서비스와 지속적인 품질 관리',
    color: 'text-yellow-500'
  },
]

const brandValues = [
  {
    title: '신선함',
    description: '매일 신선하게 로스팅되는 원두',
    percentage: 98,
  },
  {
    title: '청결함', 
    description: '위생과 청결을 최우선으로',
    percentage: 99,
  },
  {
    title: '친환경',
    description: '지속 가능한 친환경 운영',
    percentage: 95,
  },
]

export default function BrandSection() {
  return (
    <section className="section-padding bg-white">
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
            Mood Cafe만의
            <br />
            <span className="text-gradient">특별한 가치</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            자연에서 얻은 영감으로 만들어가는 새로운 카페 문화
            <br />
            고객 한 분 한 분의 특별한 순간을 위해 끊임없이 노력합니다
          </p>
        </motion.div>

        {/* 특징 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-green-main/10 transition-colors duration-300">
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-semibold text-green-deep mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 브랜드 이미지 & 가치 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mood Cafe Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-main/30 to-transparent" />
            </div>
            {/* 장식 요소 */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-light/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-main/20 rounded-full blur-lg"></div>
          </motion.div>

          {/* 텍스트 & 가치 지표 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-green-deep mb-6">
              자연과 기술의 완벽한 조화
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mood Cafe는 자연에서 얻은 신선한 재료와 최신 기술을 결합하여 
              고객에게 최고의 경험을 제공합니다. 우리의 모든 제품은 엄격한 
              품질 관리를 통해 일관된 맛과 품질을 보장합니다.
            </p>

            {/* 가치 지표 */}
            <div className="space-y-6">
              {brandValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-deep">{value.title}</span>
                    <span className="text-green-main font-bold">{value.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-green-main to-green-light h-2 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 