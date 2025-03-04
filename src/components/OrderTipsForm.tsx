import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type OrderTipsFormProps = {
  dispatch: React.Dispatch<OrderActions>
  tip: number
}

export const OrderTipsForm = ({ dispatch, tip }: OrderTipsFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      {
        tipOptions.map(tipOption => (
          <div className="flex items-center space-x-3" key={tipOption.id} >
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={() => dispatch({type:'add-tip',payload:{value:tipOption.value}})}
              checked={tipOption.value === tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))

      }
    </div>
  )
}
