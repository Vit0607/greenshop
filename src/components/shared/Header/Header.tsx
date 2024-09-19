import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../../../components/ui/Button/Button';
import cn from 'classnames';
import SearchInput from '../Search/Search';
import { linksMenuEn } from '../../../constants/links';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { AuthLayout } from '../../../layout/Auth/AuthLayout';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

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
          <Button onClick={onOpenModal}>
            <img
              src="/icons/login-icon.svg"
              alt="Иконка входа"
              className={styles['login-icon']}
            />
            Login
          </Button>
        </div>
        {isModalOpen && (
          <Modal onClose={onClose}>
            <AuthLayout />
          </Modal>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
