import { Link } from 'react-router-dom';
import styles from './product.module.css';
import { ProductCardProps } from './Product.props';

function ProductCard({ oldPrice = null, ...props }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(props.price);

    const formattedOldPrice =
        oldPrice !== null
            ? new Intl.NumberFormat('en-Us', {
                  style: 'currency',
                  currency: 'USD'
              }).format(oldPrice)
            : null;

    return (
        <Link to={'/'} className={styles['link']}>
            <div className={styles['card']}>
                <div
                    className={styles['head']}
                    style={{ backgroundImage: `url('${props.image}')` }}
                >
                    {oldPrice !== null && (
                        <span className={styles['discount']}>
                            {Math.round((1 - props.price / oldPrice) * 100)}%
                            off
                        </span>
                    )}
                    <div className={styles['icons']}>
                        <button className={styles['icon']}>
                            <svg>
                                <use href="/icons/cart-icon.svg#cart"></use>
                            </svg>
                        </button>
                        <button className={styles['icon']}>
                            <svg>
                                <use href="/icons/like-icon.svg#like"></use>
                            </svg>
                        </button>
                        <button className={styles['icon']}>
                            <svg>
                                <use href="/icons/search-icon.svg#search"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['price']}>
                        <span className={styles['current-price']}>
                            {formattedPrice}
                        </span>
                        {formattedOldPrice !== null && (
                            <span className={styles['old-price']}>
                                {formattedOldPrice}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
