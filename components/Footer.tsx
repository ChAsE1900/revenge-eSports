'use client'

import Link from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Revenge <span className="text-violet-500">eSports</span>
            </Link>
            <p className="mt-2 text-sm">{t('Leading the charge in competitive gaming')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-violet-500 transition-colors">{t('About Us')}</Link></li>
              <li><Link href="#teams" className="hover:text-violet-500 transition-colors">{t('Our Teams')}</Link></li>
              <li><Link href="#news" className="hover:text-violet-500 transition-colors">{t('Latest News')}</Link></li>
              <li><Link href="#contact" className="hover:text-violet-500 transition-colors">{t('Contact')}</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">{t('Follow Us')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-violet-500 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-violet-500 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-violet-500 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-violet-500 transition-colors"><FaTwitch size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Revenge eSports. {t('All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  )
}

