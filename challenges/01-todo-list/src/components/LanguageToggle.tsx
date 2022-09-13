import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';
import WorldIcon from '../assets/world.svg';

export function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR');
  }, [i18n]);

  return (
    <button className={styles.button} onClick={handleChangeLanguage}>
      <img src={WorldIcon} width='36' alt={t('alt-language')} />
    </button>
  );
}
