import styles from './EasyMoney.module.css';
import { useTranslations } from 'next-intl';

export default function EasyMoney() {
  const t = useTranslations();

  return (
    <section className={styles.easyMoney}>
      <h2 className={styles.header}>{t('EasyMoney.header')}</h2>

      <div className={styles.wrap}>
        <h2> {t('EasyMoney.blockHeader')}</h2>
        <p>
          {t('EasyMoney.blockText.first')}
          <span>{t('EasyMoney.blockText.second')}</span>
          {t('EasyMoney.blockText.third')}
        </p>
      </div>
    </section>
  );
}
