import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import Loader from '../../components/Loader/Loader';
import { PlantsList } from './PlantsList/PlantsList';

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getProducts = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}/plants`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            setIsLoading(false);
            return;
        }
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
                {error && <>{error}</>}
                {!isLoading && <PlantsList products={products} />}
                {isLoading && <Loader />}
            </div>
        </>
    );
}

export default Home;
