'use client';

import { Check, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const AccountTypesPage = () => {
  const t = useTranslations('accountTypes2');
  const locale = useLocale();

  const accountTiers = [
    'trial',
    'bronze',
    'silver',
    'golden',
    'platinum',
    'vip',
  ];

  return (
    <>
      <div className='min-h-screen bg-black text-white'>
        <div className='relative h-[400px] md:h-[500px] lg:h-[600px] w-full'>
          <div className='absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24'>
            <h1 className='mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl'>
              {t('hero.title')}
            </h1>
            <p className='mb-8 max-w-3xl text-xl italic text-white md:text-2xl'>
              {t('hero.subtitle')}
            </p>
            <Link
              href={`/${locale}/register`}
              className='rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-gray-200'
            >
              {t('hero.button')}
            </Link>
          </div>
        </div>

        <div className='mx-auto max-w-[1400px] px-4 py-16 md:px-6 lg:px-8'>
          <div className='overflow-x-auto'>
            <table className='w-full table-fixed border-collapse'>
              <thead>
                <tr className='border-b border-gray-800'>
                  <th className='w-48 p-4 text-left font-normal text-gray-400'></th>
                  {accountTiers.map(tier => (
                    <th
                      key={tier}
                      className='p-4 text-center text-lg font-semibold capitalize md:text-xl'
                      style={{
                        color:
                          tier === 'trial'
                            ? '#4ade80'
                            : tier === 'bronze'
                            ? '#cd7f32'
                            : tier === 'silver'
                            ? '#c0c0c0'
                            : tier === 'golden'
                            ? '#ffd700'
                            : tier === 'platinum'
                            ? '#e5e4e2'
                            : '#9333ea',
                      }}
                    >
                      {t(`tiers.${tier}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.tradingTools')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.tradingTools.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>{t('features.spreads')}</td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.spreads.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.withdrawals')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.withdrawals.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.minimumDeposit')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm font-semibold text-white'
                    >
                      {t(`values.minimumDeposit.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.customerService')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {tier === 'trial' ? (
                        <Check className='mx-auto h-5 w-5 text-green-500' />
                      ) : (
                        t(`values.customerService.${tier}`)
                      )}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.liveSessions')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.liveSessions.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>{t('features.leverage')}</td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.leverage.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.dailyMarketReviews')}
                  </td>
                  {accountTiers.map(tier => (
                    <td key={tier} className='p-4 text-center'>
                      {tier === 'trial' ? (
                        <X className='mx-auto h-5 w-5 text-red-500' />
                      ) : (
                        <Check className='mx-auto h-5 w-5 text-green-500' />
                      )}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.tradingAlerts')}
                  </td>
                  {accountTiers.map(tier => (
                    <td key={tier} className='p-4 text-center'>
                      {tier === 'trial' ? (
                        <X className='mx-auto h-5 w-5 text-red-500' />
                      ) : (
                        <Check className='mx-auto h-5 w-5 text-green-500' />
                      )}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.vipMentorship')}
                  </td>
                  {accountTiers.map(tier => (
                    <td key={tier} className='p-4 text-center'>
                      {tier === 'trial' ||
                      tier === 'bronze' ||
                      tier === 'silver' ? (
                        <X className='mx-auto h-5 w-5 text-red-500' />
                      ) : (
                        <Check className='mx-auto h-5 w-5 text-green-500' />
                      )}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.bonusPromotions')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm font-semibold text-white'
                    >
                      {t(`values.bonusPromotions.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.aiTradingSoftware')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.aiTradingSoftware.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.nfpTradingSignals')}
                  </td>
                  {accountTiers.map(tier => (
                    <td
                      key={tier}
                      className='p-4 text-center text-sm text-gray-300'
                    >
                      {t(`values.nfpTradingSignals.${tier}`)}
                    </td>
                  ))}
                </tr>

                <tr className='border-b border-gray-800'>
                  <td className='p-4 font-medium'>
                    {t('features.arbitrageTrading')}
                  </td>
                  {accountTiers.map(tier => (
                    <td key={tier} className='p-4 text-center'>
                      {tier === 'trial' ? (
                        <X className='mx-auto h-5 w-5 text-red-500' />
                      ) : (
                        <Check className='mx-auto h-5 w-5 text-green-500' />
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className='p-4'></td>
                  {accountTiers.map(tier => (
                    <td key={tier} className='p-4 text-center'>
                      <Link
                        href={`/${locale}/register`}
                        className='block w-full rounded bg-green-600 px-6 py-3 text-sm font-semibold uppercase text-white transition-all hover:bg-green-700'
                      >
                        {t('openAccount')}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTypesPage;
