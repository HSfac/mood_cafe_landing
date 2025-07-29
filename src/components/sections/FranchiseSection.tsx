'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: '합리적인 창업비용',
    description: '업계 최저 수준의 가맹비와 인테리어 비용으로 부담을 최소화',
    amount: '3,000만원',
    detail: '부터 시작'
  },
  {
    icon: AcademicCapIcon,
    title: '체계적인 교육시스템',
    description: '2주간의 집중 교육과 지속적인 운영 지원',
    amount: '100%',
    detail: '무료 교육'
  },
  {
    icon: ShieldCheckIcon,
    title: '안정적인 수익구조',
    description: '검증된 비즈니스 모델과 지속적인 매출 성장',
    amount: '24개월',
    detail: '평균 투자회수'
  },
  {
    icon: ChartBarIcon,
    title: '마케팅 지원',
    description: '본사의 전문적인 마케팅 지원과 브랜딩',
    amount: '365일',
    detail: '24시간 지원'
  },
]

const process = [
  { step: '01', title: '상담 신청', description: '온라인 또는 전화로 창업 상담 신청' },
  { step: '02', title: '입지 분석', description: '전문가와 함께 최적의 입지 선정' },
  { step: '03', title: '계약 체결', description: '가맹 계약 및 인테리어 설계' },
  { step: '04', title: '교육 진행', description: '2주간 집중 교육 프로그램 참여' },
  { step: '05', title: '매장 오픈', description: '그랜드 오픈 및 운영 시작' },
  { step: '06', title: '사후 관리', description: '지속적인 운영 지원 및 관리' },
]

const testimonials = [
  {
    name: '김창업',
    location: '서울 강남점',
    period: '운영 2년차',
    comment: '체계적인 지원 덕분에 안정적으로 운영하고 있습니다. 본사의 지속적인 관심과 도움이 큰 힘이 됩니다.',
    rating: 5,
    profit: '월 300만원'
  },
  {
    name: '이사장',
    location: '부산 해운대점',
    period: '운영 1년차',
    comment: '처음 창업이었는데 걱정과 달리 순조롭게 정착했습니다. 교육 프로그램이 정말 도움됐어요.',
    rating: 5,
    profit: '월 250만원'
  },
]

export default function FranchiseSection() {
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
            성공적인 창업의 시작
            <br />
            <span className="text-gradient">Mood Cafe와 함께</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            검증된 비즈니스 모델과 체계적인 지원 시스템으로
            <br />
            여러분의 성공적인 창업을 도와드립니다
          </p>
        </motion.div>

        {/* 가맹 혜택 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-main/10 rounded-full flex items-center justify-center group-hover:bg-green-main group-hover:text-white transition-all duration-300">
                <benefit.icon className="h-8 w-8 text-green-main group-hover:text-white" />
              </div>
              <div className="text-3xl font-bold text-green-main mb-2">{benefit.amount}</div>
              <div className="text-sm text-gray-500 mb-3">{benefit.detail}</div>
              <h3 className="text-lg font-semibold text-green-deep mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 창업 프로세스 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-green-deep mb-12">
            간편한 창업 프로세스
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-green-main/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-green-main text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-green-deep mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 성공 사례 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-green-deep mb-12">
            가맹점주 성공 스토리
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-green-main/5 to-green-light/5 rounded-2xl border border-green-main/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircleIcon key={i} className="h-5 w-5 text-green-main" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-green-deep">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location} · {testimonial.period}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-main">{testimonial.profit}</div>
                    <div className="text-sm text-gray-500">평균 순수익</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-main to-green-light rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            지금 시작하세요!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Mood Cafe와 함께 성공적인 창업의 첫걸음을 내딛어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/startup" className="btn-secondary bg-white text-green-main border-white hover:bg-gray-50">
              창업 상담 신청
            </Link>
            <Link href="/stores" className="btn-secondary border-white text-white hover:bg-white/10">
              매장 둘러보기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 