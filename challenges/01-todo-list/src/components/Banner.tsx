import Logo from '../assets/Logo.svg';
import styles from './Banner.module.css';

export function Banner() {
  return (
    <div className={styles.banner}>
      <img src={Logo} alt='Logo todo' />
    </div>
  );
}
