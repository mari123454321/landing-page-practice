'use client';

import { Button } from '@/components/ui/design-system/button';
import { Card } from '@/components/ui/design-system/card';
import { Check, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AccountTypesPage() {
  const t = useTranslations('accountTypes');
  const locale = useLocale();

  const accountTypes = [
    {
      name: t('accounts.silver.name'),
      amount: '$12,500',
      leverage: '1:10',
      education: t('accounts.silver.education'),
      support: '24/5',
      signals: 5,
      leadingBroker: true,
      minimumLot: 0.1,
      negativeBalance: true,
      commissions: 'USD',
      loyaltyProgram: false,
      specialOffers: false,
      bgColor: 'bg-white',
    },
    {
      name: t('accounts.gold.name'),
      amount: '$25,000',
      leverage: '1:20',
      education: t('accounts.gold.education'),
      support: '24/5',
      signals: 10,
      leadingBroker: true,
      minimumLot: 0.1,
      negativeBalance: true,
      commissions: 'USD',
      loyaltyProgram: false,
      specialOffers: false,
      bgColor: 'bg-white',
    },
    {
      name: t('accounts.platinum.name'),
      amount: '$50,000',
      leverage: '1:50',
      education: t('accounts.platinum.education'),
      support: '24/7',
      signals: 50,
      leadingBroker: true,
      minimumLot: 0.5,
      negativeBalance: true,
      commissions: 'USD',
      loyaltyProgram: '25%',
      specialOffers: false,
      bgColor: 'bg-blue-50',
    },
    {
      name: t('accounts.diamond.name'),
      amount: '$100,000',
      leverage: '1:150',
      education: t('accounts.diamond.education'),
      support: '24/7',
      signals: 150,
      leadingBroker: true,
      minimumLot: 1,
      negativeBalance: true,
      commissions: 'USD',
      loyaltyProgram: '50%',
      specialOffers: true,
      bgColor: 'bg-white',
    },
    {
      name: t('accounts.vip.name'),
      amount: '$250,000',
      leverage: '1:300',
      education: t('accounts.vip.education'),
      support: '24/7',
      signals: 250,
      leadingBroker: true,
      minimumLot: 1,
      negativeBalance: true,
      commissions: 'USD',
      loyaltyProgram: '75%',
      specialOffers: true,
      bgColor: 'bg-slate-950',
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-slate-950 text-white py-16 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl font-bold text-white mb-4'>{t('title')}</h1>
            <p className='text-lg text-white max-w-2xl mx-auto'>
              {t('description')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 '>
            {accountTypes.map(account => (
              <Card
                key={account.name}
                className={`bg-slate-950 text-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow`}
              >
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {account.name}
                </h3>

                <div className='text-4xl font-bold text-blue-400 mb-8'>
                  {account.amount}
                </div>

                <div className='space-y-4 mb-8'>
                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>{t('features.leverage')}</span>
                    <span className='font-medium text-white'>
                      {account.leverage}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.education')}
                    </span>
                    <span className='font-medium text-white'>
                      {account.education}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>{t('features.support')}</span>
                    <span className='font-medium text-white'>
                      {account.support}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>{t('features.signals')}</span>
                    <span className='font-medium text-white'>
                      {account.signals}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.leadingBroker')}
                    </span>
                    {account.leadingBroker ? (
                      <Check className='w-5 h-5 text-white' />
                    ) : (
                      <X className='w-5 h-5 text-white' />
                    )}
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.minimumLot')}
                    </span>
                    <span className='font-medium text-white'>
                      {account.minimumLot}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.negativeBalance')}
                    </span>
                    {account.negativeBalance ? (
                      <Check className='w-5 h-5 text-white' />
                    ) : (
                      <X className='w-5 h-5 text-white' />
                    )}
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.commissions')}
                    </span>
                    <span className='font-medium text-white'>
                      {account.commissions}
                    </span>
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.loyaltyProgram')}
                    </span>
                    {account.loyaltyProgram ? (
                      <span className='font-medium text-white'>
                        {account.loyaltyProgram}
                      </span>
                    ) : (
                      <X className='w-5 h-5 text-white' />
                    )}
                  </div>

                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-white'>
                      {t('features.specialOffers')}
                    </span>
                    {account.specialOffers ? (
                      <Check className='w-5 h-5 text-white' />
                    ) : (
                      <X className='w-5 h-5 text-white' />
                    )}
                  </div>
                </div>

                <Button
                  asChild
                  className='w-full bg-blue-400 hover:bg-blue-500 text-white rounded-lg py-3 font-medium transition-colors'
                >
                  <Link href={`/${locale}/register`}>{t('openAccount')}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
