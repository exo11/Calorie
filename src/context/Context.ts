import { createContext } from 'react'
import { type IContext } from 'model'
import { initialCompute, initialResult } from 'utils/index'

const Context = createContext<IContext>({
  state: 0, 
  how: false, 
  verify: undefined, 
  compute: initialCompute, 
  result: initialResult, 
  onHow: () => {}, 
  onSubmit: () => {},
  onChange: () => {}, 
  onResult: () => {}
})

export default Context

