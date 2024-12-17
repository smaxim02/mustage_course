import styles from './Confirm.module.css';
import { useTranslations } from 'next-intl';
import Button from '../Button/Button';
import Link from 'next/link';
import Icon from '@/helpers/Icon';

export default function Confirm({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <section className={styles.confirm}>
      <Link className={styles.logo_wrap} href={`/${locale}/`}>
        <Icon name="icon-logo" width={58} height={48} />
        <span className={styles.logo_text}>{t('Confirm.logo')}</span>
      </Link>
      <h1 className={styles.header}>{t('Confirm.header')}</h1>
      <p className={styles.text}>{t('Confirm.text')}</p>
      <div className={styles.button_wrap}>
        <Button width="232px" link={`/${locale}/`} text={t('Confirm.button')} />
      </div>

      <div className={styles.background}></div>
    </section>
  );
}
