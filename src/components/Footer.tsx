'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ChatBubbleLeftIcon 
} from '@heroicons/react/24/outline'

const footerLinks = {
  company: [
    { name: '회사소개', href: '/about' },
    { name: '브랜드 스토리', href: '/brand' },
    { name: '보도자료', href: '/news' },
    { name: '채용정보', href: '/careers' },
  ],
  franchise: [
    { name: '창업안내', href: '/startup' },
    { name: '가맹비용', href: '/cost' },
    { name: '교육프로그램', href: '/education' },
    { name: '성공사례', href: '/success' },
  ],
  service: [
    { name: '매장찾기', href: '/stores' },
    { name: '메뉴소개', href: '/menu' },
    { name: '이벤트', href: '/events' },
    { name: '고객센터', href: '/support' },
  ],
}

const contactInfo = [
  {
    icon: PhoneIcon,
    title: '전화문의',
    content: '1588-0000',
    link: 'tel:1588-0000'
  },
  {
    icon: EnvelopeIcon,
    title: '이메일',
    content: 'info@moodcafe.kr',
    link: 'mailto:info@moodcafe.kr'
  },
  {
    icon: ChatBubbleLeftIcon,
    title: '카카오톡',
    content: '@무드카페',
    link: 'https://pf.kakao.com/moodcafe'
  },
  {
    icon: MapPinIcon,
    title: '본사주소',
    content: '서울시 강남구 테헤란로 123',
    link: 'https://maps.google.com'
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-main to-green-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="text-2xl font-bold text-green-deep">
                  Mood Cafe
                </span>
              </Link>
              <p className="text-gray-600 mb-6 leading-relaxed">
                자연 친화적이고 신선한 프리미엄 카페 프랜차이즈<br />
                깨끗하고 모던한 공간에서 최고 품질의 커피를 경험하세요.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/moodcafe`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-main/10 hover:bg-green-main text-green-main hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 링크 섹션들 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-green-deep mb-4">회사정보</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-main transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-green-deep mb-4">가맹사업</h3>
              <ul className="space-y-3">
                {footerLinks.franchise.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-main transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-green-deep mb-4">고객서비스</h3>
              <ul className="space-y-3">
                {footerLinks.service.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-main transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* 연락처 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-green-main/5 transition-colors duration-200 group"
              >
                <item.icon className="h-6 w-6 text-green-main group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <div className="text-sm text-gray-500">{item.title}</div>
                  <div className="font-medium text-green-deep">{item.content}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* 하단 정보 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500"
        >
          <div className="mb-4 lg:mb-0">
            <p>© 2024 Mood Cafe. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-green-main transition-colors duration-200">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-green-main transition-colors duration-200">
              이용약관
            </Link>
            <Link href="/sitemap" className="hover:text-green-main transition-colors duration-200">
              사이트맵
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 