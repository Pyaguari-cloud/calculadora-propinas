import type { MenuItem } from "../types"

type MenuItemProp = {
    item: MenuItem,
    addItem: (item:MenuItem) => void
}

export const MenuItemComponent = ({ item, addItem }: MenuItemProp) => {
    return (
        <button
            onClick={()=> addItem(item)}
            className="border-2 border-teal-400 w-full p-3 hover:bg-teal-200 rounded-lg cursor-pointer flex justify-between">
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
