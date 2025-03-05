import { useReducer } from 'react'
import { MenuItemComponent } from './components/MenuItem'
import { OrderContent } from './components/OrderContent'
import { OrderTipsForm } from './components/OrderTipsForm'
import { OrderTotals } from './components/OrderTotals'
import { menuItems } from './data/db'
import { initialState, orderReducer } from './reducers/order-reducer'


export const App = () => {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>

        <div className='px-5'>
          <h2 className='text-4xl font-black'>Menú</h2>
          <div className='space-y-3 mt-10'>
            {
              menuItems.map(item => (
                <MenuItemComponent
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                />
              ))
            }
          </div>
        </div>
        <div className='px-5 border border-dashed border-gray-400 rounded-lg space-y-10' >
          {
            state.order.length > 0 ? (
              <>
              <h2 className='text-4xl font-black'>Consumo</h2>
              <OrderContent order={state.order} dispatch={dispatch}/>
  
              <OrderTipsForm dispatch={dispatch} tip={state.tip}/>
  
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch}  />
              
              </>
            ) :
            <p className="text-center text-2xl" >No hay ninguna order</p>
          }
        </div>

      </main>
    </>
  )
}
