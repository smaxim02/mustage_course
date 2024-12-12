import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks, tariffsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Button from '../Button/Button';

export default function Tariffs() {
  const t = useTranslations();

  return (
    <section id="tariffs" className={styles.tariffs}>
      <h2 className={styles.header}>{t('Tariffs.header')}</h2>

      <ul className={styles.list}>
        {tariffsItems.map((item, index) => (
          <li key={index}>
            <h3>{t(item.header)}</h3>
            <span>{t(item.price)}</span>

            <ul className={styles.subList}>
              {Object.entries(item.list).map(([key, value]) =>
                value ? (
                  <li className={styles.listItem} key={key}>
                    <div className={styles.icon_wrap}>
                      <Icon
                        name="icon-check"
                        width={12}
                        height={9}
                        color="#575FF2"
                      />
                    </div>

                    <p>{t(value)}</p>
                  </li>
                ) : null
              )}
            </ul>
            <div className={styles.button_wrap}>
              <Button
                width="100%"
                link={t('Main.buttonLink')}
                text={t('Main.buttonTariffs')}
                showArrow={false}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.bankWrap}>
        <div className={styles.moneyBox}></div>
        <p>
          {t('Tariffs.bank.first')}
          <span>{t('Tariffs.bank.second')}</span>
        </p>
        <ul className={styles.bankList}>
          {tariffsBanks.map((item, index) => (
            <li key={index}>
              <Icon name={item} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
