import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderMenuItem } from "../types"

type OrderContentProps = {
    order: OrderMenuItem[],
    dispatch: React.Dispatch<OrderActions>
}

export const OrderContent = ({ order, dispatch }: OrderContentProps) => {

    

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
                            onClick={() => dispatch({type:'remove-item', payload:{id:item.id}})}
                            className="h-8 w-8 rounded-full bg-red-500 text-white font-black cursor-pointer">
                            X
                        </button>
                    </div>

                ))


            }
        </div>
    )
}
