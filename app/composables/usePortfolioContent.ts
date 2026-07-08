import { portfolioContent } from '~/data/portfolio'

export function usePortfolioContent() {
  const { locale } = useI18n()
  return computed(() => portfolioContent[locale.value as 'fr' | 'en'] ?? portfolioContent.fr)
}
