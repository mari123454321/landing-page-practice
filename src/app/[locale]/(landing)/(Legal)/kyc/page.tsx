'use client';

import { useCompanyInfo } from '@/hooks/use-company-info';
import { useTranslations } from 'next-intl';

export default function KYCPage() {
  const t = useTranslations('kyc');

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || '';

  return (
    <>
      <div className='min-h-screen bg-background py-20'>
        <div className='container mx-auto max-w-4xl px-4'>
          <h1 className='mb-8 text-4xl font-bold'>{t('title')}</h1>

          <div className='space-y-12'>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t('section1.title')}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section1.p1')}
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section1.p2', { companyName })}
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section1.p3')}
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t('section2.title')}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section2.p1', { companyName })}
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t('section3.title')}
              </h2>
              <ul className='list-disc list-inside space-y-2 text-muted-foreground'>
                <li>{t('section3.p1')}</li>
                <li>{t('section3.p2')}</li>
                <li>{t('section3.p3')}</li>
                <li>{t('section3.p4')}</li>
              </ul>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t('section4.title')}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section4.p1',{companyName})}
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section4.p2')}
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                {t('section4.p3')}
              </p>
            </section>

            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t(`section5.title`)}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t(`section5.p1`)}
              </p>
            </section>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t(`section6.title`)}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t(`section6.p1`,{companyName})}
              </p>
            </section>
            <section className='space-y-4'>
              <h2 className='text-2xl font-semibold text-primary'>
                {t(`section7.title`)}
              </h2>
              <p className='text-muted-foreground leading-relaxed'>
                {t(`section7.p1`,{companyName})}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
