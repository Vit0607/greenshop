import styles from './Close.module.scss';
import { CloseProps } from './Close.props';

function Close({ onClick }: CloseProps) {
  return <button onClick={onClick} className={styles.close}></button>;
}

export default Close;
