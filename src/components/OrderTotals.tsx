import { useMemo } from "react"
import { OrderMenuItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps = {
    order: OrderMenuItem[]
    tip: number
    dispatch: React.Dispatch<OrderActions>
}

export const OrderTotals = ({ order, tip, dispatch }: OrderTotalProps) => {

    const subtotal = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const propinaAmount = useMemo( () => subtotal * tip, [subtotal, tip] )
    const totalAmount = useMemo( () => subtotal + propinaAmount, [subtotal, propinaAmount] )
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>

                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotal)}</span>
                </p>


                <p>Propina : {''}
                    <span className="font-bold">{formatCurrency(propinaAmount)}</span>
                </p>

                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

                <button 
                className="w-full bg-black p-3 text-white font-black text-2xl cursor-pointer hover:bg-gray-800"
                onClick={()=> dispatch({type:'place-order'})}
                >Guardar</button>
            </div>
        </>
    )
}
