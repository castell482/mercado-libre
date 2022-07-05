export interface Description {
    categories: null;
    items: Items;
}

interface Items {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}

interface Price {
    amount: number;
    currency: string;
}
