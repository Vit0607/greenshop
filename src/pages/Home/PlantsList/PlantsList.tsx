import ProductCard from '../../../components/ProductCard/ProductCard';
import { PlantsListProps } from './PlantsList.props';

export function PlantsList({ products }: PlantsListProps) {
    return products.map(p => (
        <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            oldPrice={p.oldPrice}
            image={p.image}
        />
    ));
}
