import { useTranslation } from 'react-i18next';
import styles from './Author.module.css';

export function Author() {
  const { t } = useTranslation();

  return (
    <div className={styles.outer}>
      <p style={{ bottom: '45px' }} className={styles.p}>
        <a href='https://www.linkedin.com/in/lucas-fell/'>{t('created-by')} Lucas Fell</a> @{' '}
        <a href='https://github.com/fell-lucas/react-ignite-2022/tree/main/challenges/01-todo-list'>Repo</a>
      </p>
      <p className={styles.p}>
        <a href='https://www.linkedin.com/in/millenakmartins/'>{t('design-by')} Millena Martins</a> @{' '}
        <a href='https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate'>Figma</a>
      </p>
    </div>
  );
}
