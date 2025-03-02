import { useState } from "react"
import { MenuItem, OrderMenuItem } from "../types"

export const useMenuItem = () => {

    const [order, setOrder] = useState<OrderMenuItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExists = order.find( x=> x.id === item.id )

        if(itemExists){
            const result = order.map(x=> x.id === item.id ? {...x, quantity: x.quantity + 1 } : x)
            setOrder(result)
        }else {
            const newItem: OrderMenuItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (itemId:MenuItem['id']) => {
        const remove = order.filter( item => (
            item.id !== itemId
        ) )
        setOrder(remove)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        //propiedades
        order,
        tip,
        // metodos
        addItem,
        removeItem,
        setTip,
        placeOrder
    }
}