import path from 'path'

const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en']
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',

  // Правильное указание пути для TypeScript
  localePath: path.resolve('./public/locales'),

  // Опционально: настройки namespace
  defaultNS: 'common',
  ns: ['common', 'home']
}

export default nextI18NextConfig
