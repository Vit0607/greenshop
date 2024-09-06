import { useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

function SearchInput({ className, ...props }: SearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null); //Создаём ref для input

    const toggleSearchInput = () => {
        setIsOpen(prev => {
            if (prev) {
                setSearchTerm('');
            } // Если input закрывается, сбрасываем значение searchTerm
            return !prev;
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus(); // Устанавливаем фокус, когда input открыт
        }
    }, [isOpen]); // Зависимость от isOpen

    return (
        <div
            className={cn(styles['search-container'], className, {
                [styles.open]: isOpen
            })}
        >
            {isOpen && (
                <input
                    {...props}
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className={cn(styles['search-input'], className, {
                        [styles.open]: isOpen
                    })}
                    ref={inputRef} // Присваиваем ref инпуту
                />
            )}
            <img
                src="/icons/search-icon.svg"
                className={styles['search-icon']}
                onClick={toggleSearchInput}
                alt="Иконка поиска"
            />
        </div>
    );
}

export default SearchInput;
