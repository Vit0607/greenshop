import ProductCard from '../../../components/ProductCard/ProductCard';
import { PlantsListProps } from './PlantsList.props';
import styles from './PlantsList.module.css';

export function PlantsList({ products }: PlantsListProps) {
    return (
        <div className={styles.wrapper}>
            {products.map(p => (
                <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    oldPrice={p.oldPrice}
                    image={p.image}
                />
            ))}
        </div>
    );
}
