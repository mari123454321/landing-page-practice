'use client';
import { useCompanyInfo } from '@/hooks/use-company-info';
import { useTranslations } from 'next-intl';

export default function CompanyPage() {
  const t = useTranslations('company');

  const companyInfo = useCompanyInfo();
  const companyName = companyInfo?.name || '';

  return (
    <>
      <main className='min-h-screen bg-background'>
        <div className='container mx-auto max-w-4xl px-4 py-20'>
          <h1 className='mb-8 text-center text-4xl font-bold'>{t('title')}</h1>

          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t('section1.title')}
            </h2>
            <p className='mb-4 text-lg leading-relaxed text-muted-foreground'>
              {t('section1.p1', { companyName })}
            </p>
            <p className='mb-4 text-lg leading-relaxed text-muted-foreground'>
              {t('section1.p2')}
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t('section2.title')}
            </h2>
            <p className='mb-4 text-lg leading-relaxed text-muted-foreground'>
              {t('section2.p1')}
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t('section3.title')}
            </h2>
            <p className='mb-4 text-lg leading-relaxed text-muted-foreground'>
              {t('section3.p1')}
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t('section4.title')}
            </h2>
            <p className='mb-4 text-lg leading-relaxed text-muted-foreground'>
              {t('section4.p1')}
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t(`section5.title`)}
            </h2>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              {t(`section5.p1`, { companyName })}
            </p>
          </section>
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t(`section6.title`)}
            </h2>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              {t(`section6.p1`)}
            </p>
          </section>
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t(`section7.title`)}
            </h2>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              {t(`section7.p1`,{companyName})}
            </p>
          </section>
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold text-primary'>
              {t(`section8.title`)}
            </h2>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              {t(`section8.p1`,{companyName})}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
