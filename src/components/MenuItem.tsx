import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProp = {
    item: MenuItem,
    dispatch: React.Dispatch<OrderActions>
}

export const MenuItemComponent = ({ item, dispatch }: MenuItemProp) => {
    return (
        <button
            onClick={()=> dispatch({type:'add-item', payload:{item}})}
            className="border-2 border-teal-400 w-full p-3 hover:bg-teal-200 rounded-lg cursor-pointer flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
