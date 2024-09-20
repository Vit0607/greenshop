import { FormEvent } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './Register.module.scss';

export function Register() {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.login}>
      <p>Enter your email and password to register.</p>
      <form className={styles.form} onSubmit={submit}>
        <Input id="username" placeholder="Username" />
        <Input id="email" placeholder="Enter your email address" />
        <Input id="password" placeholder="Password" type="password" />
        <Input
          id="confirm-password"
          placeholder="Confirm Password"
          type="password"
        />
        <Button appearence="auth">Register</Button>
      </form>
    </div>
  );
}
