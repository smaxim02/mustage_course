import styles from './Study.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { studyItems } from '@/data/data';

export default function Study() {
  const t = useTranslations();

  return (
    <section className={styles.study}>
      <h1 className={styles.header}>
        {t('Study.header.first')}{' '}
        <span>
          {t('Study.header.second')}
          <br />
        </span>
        {t('Study.header.third')}
      </h1>

      <ul className={styles.list}>
        {studyItems.map((item, index) => (
          <li key={index}>
            <Image
              src={item.logo}
              width={0}
              height={0}
              sizes="100vw"
              alt="Info icon"
              priority
            />
            <h3>{t(item.header)}</h3>
            <h4>{t(item.title)}</h4>
            <p>{t(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
