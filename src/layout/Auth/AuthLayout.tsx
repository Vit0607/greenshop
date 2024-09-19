import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import Headling from '../../components/ui/Headling/Headling';

export function AuthLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.switches}>
        <Headling level={4} classLevel={4}>
          Login
        </Headling>
        <span> | </span>
        <Headling level={4} classLevel={4}>
          Register
        </Headling>
      </div>
      <div className={styles.content}>{/* <Outlet /> */}</div>
    </div>
  );
}
