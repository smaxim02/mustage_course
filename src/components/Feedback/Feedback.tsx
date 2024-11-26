import styles from './Feedback.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { feedbackItems } from '@/data/data';

export default function Feedback() {
  const t = useTranslations();

  return (
    <section id="feedback" className={styles.feedback}>
      <div className={styles.container}>
        <div className={styles.header_wrap}>
          <h1 className={styles.header}>
            {t('Feedback.header.first')}
            <span>{t('Feedback.header.second')}</span>
          </h1>
        </div>
        <div className={styles.list_wrap}>
          <ul className={styles.list}>
            {feedbackItems.map((item, index) => (
              <li key={index}>
                <Image
                  src={item}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Feedback image"
                  priority
                />
              </li>
            ))}
          </ul>
          <div className={styles.shadow_left}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </section>
  );
}
