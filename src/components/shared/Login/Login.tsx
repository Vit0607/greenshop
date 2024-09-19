import { FormEvent } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './Login.module.scss';

export function Login() {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.login}>
      <p>Enter your username and password to login.</p>
      <form className={styles.form} onSubmit={submit}>
        <Input id="email" placeholder="almamun_uxui@outlook.com" />
        <Input id="password" placeholder="password" type="password" />
        <Button appearence="auth">Login</Button>
      </form>
    </div>
  );
}
