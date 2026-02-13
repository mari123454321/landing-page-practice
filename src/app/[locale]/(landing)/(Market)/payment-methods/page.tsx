import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PaymentsTable() {
  const t = useTranslations('payments');
  const locale = useLocale();

  const rows = [
    { id: 1, methodKey: 'wire' },
    { id: 2, methodKey: 'ewallet' },
    { id: 3, methodKey: 'visaMaster' },
    { id: 4, methodKey: 'visa' },
    { id: 5, methodKey: 'maestro' },
    { id: 6, methodKey: 'bankTransfer' },
  ];

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-start bg-white py-12 px-6 pt-50'>
        <div className='w-full max-w-4xl'>
          <div className='overflow-hidden rounded-sm'>
            <table className='w-full table-fixed border-collapse text-sm'>
              <thead>
                <tr className='bg-black text-white'>
                  <th className='py-4'>{t('table.method')}</th>
                  <th className='py-4'>{t('table.processingTime')}</th>
                  <th className='py-4'>{t('table.fees')}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => {
                  const isGreen = idx % 2 === 1;
                  const rowBg = isGreen
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-900';

                  return (
                    <tr key={r.id} className={`${rowBg} h-12`}>
                      <td className='px-6 font-semibold'>
                        {t(`methods.${r.methodKey}`)}
                      </td>
                      <td className='text-center font-semibold'>
                        {t('processing.instantly')}
                      </td>
                      <td className='px-6'>{t('fees.depends')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className='flex justify-center gap-6 mt-10'>
            <Link href={`/${locale}/register`}>
              <button className='px-8 py-4 rounded-full bg-black text-white font-semibold tracking-wider shadow-md hover:opacity-90'>
                {t('buttons.withdrawals')}
              </button>
            </Link>
            <Link href={`/${locale}/register`}>
              <button className='px-8 py-4 rounded-full bg-black text-white font-semibold tracking-wider shadow-md hover:opacity-90'>
                {t('buttons.deposits')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
