import { formatCurrency } from "../helpers"
import { MenuItem, OrderMenuItem } from "../types"

type OrderContentProp = {
    order: OrderMenuItem[],
    removeItem: (itemId: MenuItem['id']) => void
}

export const OrderContent = ({ order, removeItem }: OrderContentProp) => {
    return (
        <div >
            {
                order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 last-of-type:border-b py-5" >

                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 rounded-full bg-red-500 text-white font-black cursor-pointer">
                            X
                        </button>
                    </div>

                ))


            }
        </div>
    )
}
