'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/outline'

const menuCategories = [
  { id: 'signature', name: '시그니처', description: '무드카페만의 특별한 메뉴' },
  { id: 'coffee', name: '커피', description: '엄선된 원두로 만든 프리미엄 커피' },
  { id: 'non-coffee', name: '논커피', description: '커피가 아닌 다양한 음료' },
  { id: 'dessert', name: '디저트', description: '달콤한 디저트와 베이커리' },
  { id: 'seasonal', name: '시즌 메뉴', description: '계절별 한정 메뉴' },
]

const menuItems = {
  signature: [
    {
      name: '무드 시그니처 라떼',
      description: '특별한 유기농 원두와 프리미엄 우유의 완벽한 조화. 무드카페만의 독특한 로스팅으로 깊고 부드러운 맛을 연출했습니다.',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'BEST',
      rating: 4.9,
      ingredients: ['유기농 원두', '프리미엄 우유', '천연 바닐라']
    },
    {
      name: '그린 모히토 프라페',
      description: '신선한 민트와 라임이 어우러진 상큼한 음료. 여름철 최고의 선택으로 시원함과 상쾌함을 동시에 느낄 수 있습니다.',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'NEW',
      rating: 4.8,
      ingredients: ['신선한 민트', '라임', '스파클링 워터']
    },
    {
      name: '허니 오트 라떼',
      description: '자연 그대로의 꿀과 귀리의 고소한 맛. 건강한 재료만을 사용하여 만든 영양가 높은 음료입니다.',
      price: 6000,
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'HOT',
      rating: 4.7,
      ingredients: ['천연 꿀', '귀리 우유', '시나몬']
    },
  ],
  coffee: [
    {
      name: '아메리카노',
      description: '깔끔하고 진한 에스프레소의 본연의 맛. 우리가 엄선한 원두로 추출한 정통 아메리카노입니다.',
      price: 4500,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      ingredients: ['에스프레소', '정제수']
    },
    {
      name: '카페라떼',
      description: '부드러운 우유와 에스프레소의 황금비율. 완벽한 밸런스로 누구나 좋아하는 클래식한 맛입니다.',
      price: 5500,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.5,
      ingredients: ['에스프레소', '스팀 밀크']
    },
    {
      name: '카푸치노',
      description: '진한 에스프레소와 벨벳같은 폼밀크의 조화. 이탈리아 전통 방식으로 제조한 정통 카푸치노입니다.',
      price: 5500,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.4,
      ingredients: ['에스프레소', '폼밀크']
    },
  ],
  'non-coffee': [
    {
      name: '얼 그레이 티',
      description: '향긋한 베르가못 향이 일품인 프리미엄 차. 영국 왕실이 사랑한 전통 블렌드로 우아한 맛을 선사합니다.',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1597318181409-cf7d0b112d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.3,
      ingredients: ['얼 그레이 찻잎', '베르가못']
    },
    {
      name: '캐모마일 티',
      description: '마음을 편안하게 해주는 캐모마일 허브티. 자연에서 온 힐링 음료로 스트레스 해소에 좋습니다.',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.2,
      ingredients: ['캐모마일', '천연 꿀']
    },
  ],
  dessert: [
    {
      name: '티라미수',
      description: '진한 커피 향과 부드러운 마스카포네 치즈의 완벽한 조화. 이탈리아 정통 레시피로 만든 프리미엄 디저트입니다.',
      price: 7500,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      ingredients: ['마스카포네', '레이디 핑거', '에스프레소']
    },
    {
      name: '치즈케이크',
      description: '부드럽고 진한 치즈의 맛. 뉴욕 스타일의 정통 치즈케이크로 풍부한 맛과 부드러운 식감이 특징입니다.',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      ingredients: ['크림치즈', '사워크림', '바닐라']
    },
  ],
  seasonal: [
    {
      name: '겨울 한정 - 진저브레드 라떼',
      description: '따뜻한 생강과 계피의 향이 어우러진 겨울 시즌 음료. 홀리데이 시즌의 특별한 맛을 경험해보세요.',
      price: 6800,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      badge: 'LIMITED',
      rating: 4.7,
      ingredients: ['진저', '계피', '에스프레소', '스팀밀크']
    },
  ],
}

function MenuCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
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
            item.badge === 'NEW' ? 'bg-blue-500' :
            item.badge === 'HOT' ? 'bg-orange-500' : 'bg-purple-500'
          }`}>
            {item.badge}
          </div>
        )}
        {item.rating && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center">
            <StarIcon className="h-3 w-3 mr-1 text-yellow-400" />
            {item.rating}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-deep mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {item.description}
        </p>
        {item.ingredients && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">주요 재료:</p>
            <div className="flex flex-wrap gap-1">
              {item.ingredients.map((ingredient: string, i: number) => (
                <span
                  key={i}
                  className="bg-green-main/10 text-green-deep text-xs px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-main">
            {item.price?.toLocaleString()}원
          </span>
          <button className="bg-green-main hover:bg-green-deep text-white px-6 py-2 rounded-lg transition-colors duration-200">
            주문하기
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
              자연의 맛
              <br />
              <span className="text-green-light">특별한 경험</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              엄선된 재료로 만든 Mood Cafe만의 특별한 메뉴들을 만나보세요
            </motion.p>
          </div>
        </section>

        {/* 메뉴 카테고리별 섹션 */}
        {menuCategories.map((category, categoryIndex) => {
          const items = menuItems[category.id as keyof typeof menuItems] || []
          
          return (
            <section 
              key={category.id} 
              className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="container-width">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-green-deep mb-4">
                    {category.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <MenuCard key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}

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
                매장에서 직접 맛보세요
              </h3>
              <p className="text-xl mb-8 opacity-90">
                가까운 Mood Cafe에서 특별한 맛을 경험해보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/stores"
                  className="btn-secondary bg-white text-green-main border-white hover:bg-gray-50"
                >
                  매장 찾기
                </a>
                <a
                  href="/startup"
                  className="btn-secondary bg-white/20 border-white text-white hover:bg-white/30 backdrop-blur-sm"
                >
                  창업 문의
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