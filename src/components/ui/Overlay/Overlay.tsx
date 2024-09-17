import styles from './Overlay.module.scss';
import { OverlayProps } from './Overlay.props';

function Overlay({ onClose }: OverlayProps) {
  return <div className={styles.overlay} onClick={() => onClose()}></div>;
}

export default Overlay;
