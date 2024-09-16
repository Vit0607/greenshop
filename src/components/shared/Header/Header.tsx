import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../../../components/ui/Button/Button';
import cn from 'classnames';
import SearchInput from '../Search/Search';
import { linksMenuEn } from '../../../constants/links';

export function Header() {
  return (
    <>
      <div className={styles['header']}>
        <Link to="/" className={styles['logo']}>
          <img src="/icons/logo.svg" alt="Логотип" />
        </Link>
        <ul className={styles['menu']}>
          {linksMenuEn.map(item => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  cn(styles['link'], { [styles.active]: isActive })
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles['header-icons']}>
          <SearchInput placeholder="Enter the plant..." />
          <Link to="/">
            <svg className={styles['cart-icon']}>
              <use href="/icons/cart-icon.svg#cart"></use>
            </svg>
          </Link>
          <Link to="/login">
            <Button>
              <img
                src="/icons/login-icon.svg"
                alt="Иконка входа"
                className={styles['login-icon']}
              />
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
