import createIntlMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const LOCALES = ['en', 'es', 'de'] as const;
const DEFAULT_LOCALE = 'en';
const extractLocale = (pathname: string): string => {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];

  return LOCALES.includes(potentialLocale as (typeof LOCALES)[number])
    ? potentialLocale
    : DEFAULT_LOCALE;
};

const intlMiddleware = createIntlMiddleware({
  locales: [...LOCALES],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
});

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const intlResponse = intlMiddleware(request);

  if (intlResponse?.status >= 300 && intlResponse.status < 400) {
    return intlResponse;
  }

  const locale = extractLocale(pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', request.nextUrl.origin);
  requestHeaders.set('x-pathname', pathname);
  requestHeaders.set('x-locale', locale);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - API routes (/api/*)
     * - Next.js internals (/_next/*)
     * - Vercel internals (/_vercel/*)
     * - Static files (*.*)
     */
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
