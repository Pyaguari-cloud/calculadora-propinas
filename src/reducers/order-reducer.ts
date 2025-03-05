import { MenuItem, OrderMenuItem } from "../types";

export type OrderActions = 
    {type: 'add-item', payload:{item:MenuItem}} |
    {type: 'remove-item', payload:{id:MenuItem['id']}} |
    {type: 'place-order'} |
    {type: 'add-tip', payload:{value:number}}


export type OrderState = {
    order: OrderMenuItem[],
    tip: number
}

export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state:OrderState = initialState,
    action: OrderActions
) => {

    if(action.type === 'add-item'){

        const itemExists = state.order.find( x=> x.id === action.payload.item.id )
        let order: OrderMenuItem[]=[]
        if(itemExists){
            order = state.order.map(x=> x.id === action.payload.item.id
                ? {...x, quantity: x.quantity + 1 } : x)
            
        }else {
            const newItem = { ...action.payload.item, quantity: 1 }
            order = [...state.order, newItem]
        }

        return {
            ...state,
            order
        }
    }

    if(action.type === 'remove-item'){
        const order = state.order.filter( item => (
            item.id !== action.payload.id
        ) )
        return {
            ...state,
            order
        }
    }

    if(action.type === 'place-order'){
        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if(action.type === 'add-tip'){
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    return state
}