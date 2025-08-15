/* istanbul ignore file */
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fi'],

  defaultLocale: 'fi',
})
