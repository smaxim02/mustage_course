import styles from './Consumables.module.css';
import { useTranslations } from 'next-intl';
import { consumablesItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Button from '../Button/Button';
import folder from '../../img/consumables/folder.webp';
import Image from 'next/image';

export default function Consumables() {
  const t = useTranslations();

  return (
    <section className={styles.consumables}>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={folder}
          width={0}
          height={0}
          sizes="100vw"
          alt="Folder icon"
          priority
        />
        <h2 className={styles.header}>{t('Consumables.header')}</h2>

        <ul className={styles.list}>
          {consumablesItems.map((item, index) => (
            <li key={index} id={item.id}>
              <Icon name={`icon-${item.id}`} width={16} height={16} />
              <h3>{t(item.text)}</h3>
            </li>
          ))}
        </ul>
        <div className={styles.text_wrap}>
          <p>
            {t('Consumables.blockText.first')}
            <span>{t('Consumables.blockText.second')}</span>
            {t('Consumables.blockText.third')}
          </p>
        </div>
        <div className={styles.button_wrap}>
          <Button
            width="70%"
            link={t('Main.buttonLink')}
            text={t('Main.buttonSecond')}
            showArrow={false}
          />
        </div>
      </div>
    </section>
  );
}
