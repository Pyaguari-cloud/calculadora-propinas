
export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderMenuItem = MenuItem & {
    quantity: number
}