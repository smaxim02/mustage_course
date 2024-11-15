import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import { resourseItems } from '@/data/data';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.container}></div>
    </section>
  );
}
