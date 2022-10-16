import { useTranslation } from 'react-i18next';

export function useTextFormat() {
  const { i18n } = useTranslation();

  const date = new Intl.DateTimeFormat(i18n.language);
  const price = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: i18n.language === 'pt-BR' ? 'BRL' : 'USD',
  });

  return {
    date,
    price,
  };
}
