import styles from './Start.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { startInfo, startItems } from '@/data/data';
import logo from '../../img/start/logo.webp';
import gift from '../../img/start/gift.webp';
import Icon from '@/helpers/Icon';
import Button from '../Button/Button';

export default function Start() {
  const t = useTranslations();

  return (
    <section id="possibility" className={styles.start}>
      <h2 className={styles.header}>
        {t('Start.header.first')} <span>{t('Start.header.second')}</span>
        {t('Start.header.third')}
      </h2>
      <div className={styles.wrap}>
        <div className={styles.list_wrap}>
          <h2 className={styles.list_header}>{t('Start.itemsHeader')}</h2>
          <ul className={styles.list}>
            {startItems.map((item, index) => (
              <li key={index}>
                <div className={styles.icon_wrap}>
                  <Icon name="icon-star" width={12} height={12} />
                </div>
                <p>{t(item)}</p>
              </li>
            ))}
          </ul>
          <p>
            {t('Start.itemsText.first')}
            <span>{t('Start.itemsText.second')}</span>
            {t('Start.itemsText.third')}
          </p>
          <Image
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
            alt="Starts icon"
            priority
          />
        </div>
        <div className={styles.second_wrap}>
          <div className={styles.stat_wrap}>
            <div>
              <span>17.7k</span>
              <p>{t('Start.videoFollow')}</p>
            </div>
            <div>
              <span>70+</span>
              <p>{t('Start.videoHack')}</p>
            </div>
          </div>
          <ul className={styles.info_wrap}>
            {startInfo.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.logo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Info icon"
                  priority
                />
                <p>{t(item.text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.gift_wrap}>
        <Image
          src={gift}
          width={0}
          height={0}
          sizes="100vw"
          alt="Gift icon"
          priority
        />
        <p>
          {t('Start.buttonText.first')}
          <span>{t('Start.buttonText.second')}</span>
        </p>

        <Button
          width="100%"
          link={t('Main.buttonLink')}
          text={t('Main.buttonSecond')}
        />
      </div>
    </section>
  );
}
