import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import Close from '../../ui/Close/Close';
import Overlay from '../../ui/Overlay/Overlay';
import { useEffect } from 'react';

const modalElement = document.getElementById('modal');

function Modal({ children, onClose }: ModalProps) {
  // Проверяем, найден ли элемент
  if (!modalElement) {
    return null; // Если элемент не найден, возвращаем null
  }
  useEffect(() => {
    function onEsc(evt: KeyboardEvent) {
      if (evt.code === 'Escape') {
        onClose();
      }
    }

    // Добавляем обработчик события нажатия клавиш
    document.addEventListener('keydown', onEsc);
    // Убираем обработчик события при размонтировании компонента
    return () => removeEventListener('keydown', onEsc);
  }, [onClose]); // Добавляем onClose как зависимость

  return createPortal(
    <>
      <div className={styles.modal}>
        <Close onClick={() => onClose()} />
        {children}
      </div>
      <Overlay onClose={onClose} />
    </>,
    modalElement
  );
}

export default Modal;
