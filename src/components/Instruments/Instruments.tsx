import styles from './Instruments.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { instrumentsItems } from '@/data/data';

export default function Instruments() {
  const t = useTranslations();

  return (
    <section id="instruments" className={styles.instruments}>
      <h2 className={styles.header}>{t('Instruments.header')}</h2>
      <ul className={styles.list}>
        {instrumentsItems.map((item, index) => (
          <li key={index}>
            <div className={styles.img_wrap}>
              <Image
                src={item.img}
                width={0}
                height={0}
                sizes="100vw"
                alt="Instruments icon"
                priority
              />
            </div>
            <div className={styles.text_wrap}>
              <p>
                <span>{t(item.text.first)}</span>
                {t(item.text.second)}
                <span>{t(item.text.third)}</span>
                {t(item.text.fourth)}
                <span>{t(item.text.fifth)}</span>
                {t(item.text.sixth)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
