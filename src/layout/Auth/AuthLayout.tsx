import styles from './AuthLayout.module.scss';
import { Login } from '../../components/shared/Login/Login';
import { Register } from '../../components/shared/Register/Register';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export function AuthLayout() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const OnLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const OnRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  if (isLoginOpen) {
    console.log('Логин');
  }

  useEffect(() => {
    setIsLoginOpen(true);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.switches}>
        <div
          className={cn(styles.tab, { [styles.active]: isLoginOpen })}
          onClick={OnLogin}
        >
          Login
        </div>
        <span> | </span>
        <div
          className={cn(styles.tab, { [styles.active]: isRegisterOpen })}
          onClick={OnRegister}
        >
          Register
        </div>
      </div>
      <div className={styles.content}>
        {isLoginOpen && <Login />}
        {isRegisterOpen && <Register />}
      </div>
    </div>
  );
}
