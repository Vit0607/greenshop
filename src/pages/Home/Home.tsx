import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async () => {
        try {
            const { data } = await axios.get<Product[]>(`${PREFIX}/plants`);
            setProducts(data);
        } catch (e) {
            console.error(e);
            return;
        }

        // try {
        //     const res = await fetch(`${PREFIX}/plants`);
        //     if (!res.ok) {
        //         return;
        //     }
        //     const data = (await res.json()) as Product[];
        //     setProducts(data);
        // } catch (e) {
        //     console.error(e);
        //     return;
        // }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Headling>
                Let's make a better <span>planet</span>
            </Headling>
            <Headling level={2} classLevel={2}>
                Our Blog Posts
            </Headling>
            <Headling classLevel={3}>Barberton Daisy</Headling>
            <div>
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
        </>
    );
}
