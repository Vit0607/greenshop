import { HeadlingProps } from './Headling.props';
import styles from './Headling.module.css';
import cn from 'classnames';

function Headling({
    level = 1,
    classLevel = 1,
    children,
    className,
    ...props
}: HeadlingProps) {
    const Tag: React.ElementType = `h${level}`;

    return (
        <Tag className={cn(className, styles[`h${classLevel}`])} {...props}>
            {children}
        </Tag>
    );
}

export default Headling;
