import { FormEvent, useState } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import styles from './Login.module.scss';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../../helpers/API';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export function Login() {
  const [error, setError] = useState<string | null>();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      // const { data } = await axios.post(`${PREFIX}/auth/login`, {
      const { data } = await axios.post(
        `https://purpleschool.ru/pizza-api-demo/auth/login`,
        {
          email,
          password
        }
      );
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={styles.login}>
      {error && <div className={styles.error}>{error}</div>}
      <p>Enter your username and password to login.</p>
      <form className={styles.form} onSubmit={submit}>
        <Input id="email" name="email" placeholder="almamun_uxui@outlook.com" />
        <Input
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />
        <Button appearence="auth">Login</Button>
      </form>
    </div>
  );
}
