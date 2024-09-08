import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';

export function Home() {
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
                <ProductCard
                    id={1}
                    title="Angel Wing Begonia"
                    price={199}
                    oldPrice={229}
                    image="/images/plant2.png"
                />
            </div>
        </>
    );
}
