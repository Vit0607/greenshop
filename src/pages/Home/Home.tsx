import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getProducts = async () => {
        try {
            setIsLoading(true);
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
            const { data } = await axios.get<Product[]>(`${PREFIX}/plants`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            setIsLoading(false);
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
                {!isLoading &&
                    products.map(p => (
                        <ProductCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            oldPrice={p.oldPrice}
                            image={p.image}
                        />
                    ))}
                {isLoading && <Loader />}
            </div>
        </>
    );
}
