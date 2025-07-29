'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline'

type FormData = {
  name: string
  phone: string
  email: string
  interest: string
  message: string
  agree: boolean
}

const contactMethods = [
  {
    icon: PhoneIcon,
    title: '전화 상담',
    info: '1588-0000',
    detail: '평일 09:00 - 18:00',
    action: 'tel:1588-0000',
    actionText: '전화하기'
  },
  {
    icon: ChatBubbleLeftIcon,
    title: '카카오톡',
    info: '@무드카페',
    detail: '24시간 상담 가능',
    action: 'https://pf.kakao.com/moodcafe',
    actionText: '상담하기'
  },
  {
    icon: EnvelopeIcon,
    title: '이메일',
    info: 'franchise@moodcafe.kr',
    detail: '상세한 자료 발송',
    action: 'mailto:franchise@moodcafe.kr',
    actionText: '메일보내기'
  },
  {
    icon: MapPinIcon,
    title: '방문 상담',
    info: '서울시 강남구 테헤란로 123',
    detail: '예약 후 방문',
    action: 'https://maps.google.com',
    actionText: '위치보기'
  },
]

const interestOptions = [
  '창업 상담',
  '가맹비 문의',
  '입지 분석',
  '교육 프로그램',
  '기타 문의'
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (!data.agree) {
      toast.error('개인정보 처리방침에 동의해주세요.')
      return
    }

    setIsSubmitting(true)
    
    try {
      // 실제 API 호출 로직
      await new Promise(resolve => setTimeout(resolve, 2000)) // 시뮬레이션
      
      toast.success('문의가 성공적으로 접수되었습니다!\n빠른 시일 내에 연락드리겠습니다.')
      reset()
    } catch (error) {
      toast.error('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
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
            창업 상담 신청
            <br />
            <span className="text-gradient">지금 시작하세요</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            전문 상담사가 여러분의 성공적인 창업을 위해
            <br />
            맞춤형 컨설팅을 제공해드립니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-deep mb-8">
              다양한 상담 방법
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-main/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-main transition-colors duration-300">
                    <method.icon className="h-6 w-6 text-green-main group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-deep mb-1">{method.title}</h4>
                    <p className="text-gray-700 font-medium">{method.info}</p>
                    <p className="text-sm text-gray-500">{method.detail}</p>
                  </div>
                  <a
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-deep transition-colors duration-200"
                  >
                    {method.actionText}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* 운영시간 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-green-main/10 to-green-light/10 rounded-2xl border border-green-main/20"
            >
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-green-main mr-3" />
                <h4 className="font-semibold text-green-deep">상담 운영시간</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">평일</span>
                  <span className="font-medium text-green-deep">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">토요일</span>
                  <span className="font-medium text-green-deep">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">일요일/공휴일</span>
                  <span className="font-medium text-red-500">휴무</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 문의 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-green-deep mb-6">
              온라인 상담 신청
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    {...register('name', { required: '이름을 입력해주세요.' })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent transition-all duration-200"
                    placeholder="홍길동"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    {...register('phone', { required: '연락처를 입력해주세요.' })}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent transition-all duration-200"
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  {...register('email', { 
                    required: '이메일을 입력해주세요.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '올바른 이메일 형식을 입력해주세요.'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent transition-all duration-200"
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  관심 분야 *
                </label>
                <select
                  {...register('interest', { required: '관심 분야를 선택해주세요.' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent transition-all duration-200"
                >
                  <option value="">선택해주세요</option>
                  {interestOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의내용
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-main focus:border-transparent transition-all duration-200"
                  placeholder="궁금한 점이나 요청사항을 자유롭게 작성해주세요."
                />
              </div>

              <div className="flex items-start">
                <input
                  {...register('agree', { required: true })}
                  type="checkbox"
                  className="mt-1 mr-3 h-4 w-4 text-green-main border-gray-300 rounded focus:ring-green-main"
                />
                <label className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다. 
                  <a href="/privacy" className="text-green-main hover:underline ml-1">
                    자세히 보기
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-main hover:bg-green-deep text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                ) : (
                  <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? '전송 중...' : '상담 신청하기'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 