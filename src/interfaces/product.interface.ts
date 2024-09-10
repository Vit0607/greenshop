export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: null | number;
    size: string;
    category: string;
    sale: boolean;
    newArrival: boolean;
    image: string;
}
