export interface Search {
    categories: string[];
    items: Item[];
}

interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: Condition;
    free_shipping: boolean;
}

enum Condition {
    New = "new",
    Used = "used",
}

interface Price {
    amount: number;
    currency: Currency;
}

enum Currency {
    Ars = "ARS",
}
