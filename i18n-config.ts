export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ur','ch','ar'],
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]
  