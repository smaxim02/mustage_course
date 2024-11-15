import { useTranslations } from 'next-intl';
// import { navItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';
import Link from 'next/link';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  const t = useTranslations('');

  return (
    <></>
    // <div
    //   onClick={closeMenu}
    //   className={`${styles.mobile_wrap} ${
    //     isMenuOpen && styles.mobile_menu_open
    //   }`}
    // >
    //   <div
    //     className={styles.burger_menu}
    //     onClick={event => event.stopPropagation()}
    //   >
    //     <Link className={styles.logo_wrap} href="/">
    //       <Icon name="icon-logo" width={48} height={40} />
    //       <span className={styles.logo_text}>{t('Header.home')}</span>
    //     </Link>

    //     <nav>
    //       <ul>
    //         {navItems.map((item, index) => (
    //           <li
    //             className={styles.mobile_link}
    //             key={index}
    //             onClick={closeMenu}
    //           >
    //             <Link href={item.href}>{t(item.label)}</Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
}
