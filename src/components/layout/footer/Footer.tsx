'use client';

import { useCompanyInfo } from '@/src/hooks/use-company-info';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const companyInfo = useCompanyInfo();

  const locale = useLocale();
  const t = useTranslations('Footer');
  const projectName = companyInfo?.name;
  const projectAddress = companyInfo?.address;
  const projectEmail = companyInfo?.email;
  const projectPhone = companyInfo?.phone;
    
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex items-center justify-between mb-12'>
          <Link href={`/${locale}`} className='flex items-center space-x-4'>
            <div className='relative group'>
              <Image
                className='rounded-2xl opacity-70'
                src='/logo.png'
                alt='logo'
                width={50}
                height={50}
              />
              <div className='absolute -inset-1 bg-linear-to-r from-emerald-500 to-violet-600 rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-10'></div>
            </div>
            <div>
              <h1 className='text-2xl font-bold bg-linear-to-r from-white via-emerald-200 to-violet-200 bg-clip-text text-transparent'>
                {projectName}
              </h1>
            </div>
          </Link>
          <div className='flex gap-4'>
            <Link
              href={`/${locale}/login`}
              className='border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors'
            >
              {t('userLogin')}
            </Link>
            <Link
              href={`/${locale}/register`}
              className='bg-[#c8e6c9] text-black px-6 py-2 hover:bg-[#a5d6a7] transition-colors'
            >
              {t('createAccount')}
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12'>
          <div>
            <h3 className='font-bold text-lg mb-4'>
              {t('tradingProducts.title')}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href={`/${locale}/digital-currencies`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('tradingProducts.digitalCurrencies')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/forex`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('tradingProducts.forex')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/indices`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('tradingProducts.indices')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/shares`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('tradingProducts.shares')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/goods`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('tradingProducts.goods')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>
              {t('marketTrading.title')}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href={`/${locale}/account`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('marketTrading.accountTypes')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/payment-methods`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('marketTrading.paymentMethods')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/Trading-news`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('marketTrading.tradingNews')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>{t('ourCompany.title')}</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href={`/${locale}/about-us`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('ourCompany.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/our-support`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('ourCompany.ourSupport')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>
              {t('legalAgreements.title')}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('legalAgreements.termsAndConditions')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('legalAgreements.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/kyc`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('legalAgreements.kycPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/aml`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t('legalAgreements.amlPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>
              {t('tradingPlatform.title')}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href={`/${locale}/company`}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {projectName}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray-800'>
          <div className='flex flex-wrap gap-6 text-sm'>
            <Link
              href={`/${locale}/aml`}
              className='text-gray-400 hover:text-white transition-colors uppercase'
            >
              {t('bottomLinks.amlPolicy')}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className='text-gray-400 hover:text-white transition-colors uppercase'
            >
              {t('bottomLinks.privacyPolicy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className='text-gray-400 hover:text-white transition-colors uppercase'
            >
              {t('bottomLinks.termsAndConditions')}
            </Link>
          </div>

          <div className='flex items-center gap-4'>
            <Image
              src='/list_icon-2.png'
              alt='Bank Transfer'
              width={600}
              height={300}
            />
          </div>
        </div>

        <div className='text-center space-y-2 pt-6 border-t border-gray-800'>
          <p className='text-pink-500'>{t('bottomText.register')}</p>
          <p className='text-gray-500 text-sm'>{projectAddress}</p>
          <p className='text-gray-500 text-sm'>
            Copyright © {new Date().getFullYear()} {projectName}
          </p>
          {projectEmail&&<p className='text-gray-500 text-sm'>Email: {projectEmail}</p>}
          <p className='text-gray-500 text-sm'>Phone: {projectPhone}</p>
        </div>
      </div>
    </footer>
  );
}
