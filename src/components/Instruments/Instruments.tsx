'use client';

import styles from './Instruments.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { instrumentsItems } from '@/data/data';
import { useConsumables } from '@/context/ConsumablesContext';

export default function Instruments() {
  const t = useTranslations();
  const { trackName, consumables } = useConsumables();

  return (
    <section id="instruments" className={styles.instruments}>
      <h2 className={styles.header}>{t('Instruments.header')}</h2>
      <ul className={styles.list}>
        {instrumentsItems.map(item => {
          const consumable = consumables.find(c => c.key === item.key);
          const imgSrc = consumable?.icon
            ? `${process.env.NEXT_PUBLIC_ADMIN_HOST}${consumable.icon.url}`
            : item.img;

          return (
            <li key={item.key}>
              <div className={styles.img_wrap}>
                <Image
                  src={imgSrc}
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
                  {t(item.text.second).replace(/Keitaro/g, trackName)}
                  <span>
                    {t(item.text.third).replace(/Keitaro/g, trackName)}
                  </span>
                  {t(item.text.fourth).replace(/Keitaro/g, trackName)}
                  <span>
                    {t(item.text.fifth).replace(/Keitaro/g, trackName)}
                  </span>
                  {t(item.text.sixth).replace(/Keitaro/g, trackName)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
