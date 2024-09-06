import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import SearchInput from '../../components/Search/Search';

export function Header() {
    return (
        <>
            <div className={styles['header']}>
                <Link to="/" className={styles['logo']}>
                    <img src="/icons/logo.svg" alt="Логотип" />
                </Link>
                <div className={styles['menu']}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            cn(styles['link'], { [styles.active]: isActive })
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            cn(styles['link'], {
                                [styles.active]: isActive
                            })
                        }
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/care"
                        className={({ isActive }) =>
                            cn(styles['link'], { [styles.active]: isActive })
                        }
                    >
                        Plant Care
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                            cn(styles['link'], { [styles.active]: isActive })
                        }
                    >
                        Blogs
                    </NavLink>
                </div>
                <div className={styles['header-icons']}>
                    <SearchInput placeholder="Enter the plant..." />
                    <Link to="/" className={styles['cart-icon']}>
                        <img src="/icons/cart-icon.svg" alt="Иконка корзины" />
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
