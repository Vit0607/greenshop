import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({
    children,
    className,
    appearence = 'small',
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(styles['button'], styles['accent'], className, {
                [styles['small']]: appearence === 'small',
                [styles['big']]: appearence === 'big',
                [styles['big-white']]: appearence === 'big-white'
            })}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
