'use client';

import { useCompanyInfo } from '@/hooks/use-company-info';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || '';

  return (
    <>
      <div className='min-h-screen bg-background py-20'>
        <div className='mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h1 className='text-4xl font-bold tracking-tight text-foreground'>
                {t('title')}
              </h1>
            </div>

            <div className='prose prose-sm max-w-none space-y-6 text-foreground'>
              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section1.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section1.p1')}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section2.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section2.p1', { companyName })}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section3.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section3.p1')}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section4.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section4.p1', { companyName })}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section5.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section5.p1', { companyName })}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section6.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section6.p1', { companyName })}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section7.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section7.p1', { companyName })}
                </p>
              </section>

              <section className='space-y-4'>
                <h2 className='text-2xl font-semibold'>
                  {t('section8.title')}
                </h2>
                <p className='leading-relaxed text-muted-foreground'>
                  {t('section8.p1', { companyName })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
