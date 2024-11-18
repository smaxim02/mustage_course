import styles from './Advantages.module.css';
import { useTranslations } from 'next-intl';
import { advantagesItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Image from 'next/image';

export default function Advantages() {
  const t = useTranslations();

  return (
    <section className={styles.advantages}>
      <h1 className={styles.header}>{t('Advantages.header')}</h1>

      <ul className={styles.list}>
        {advantagesItems.map((item, index) => (
          <li key={index}>
            <div className={styles.icon_wrap}>
              <Image
                src={item.logo}
                width={0}
                height={0}
                sizes="100vw"
                alt="Laptop icon"
                priority
              />
            </div>
            <h3>{t(item.header)}</h3>
            <p>{t(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
