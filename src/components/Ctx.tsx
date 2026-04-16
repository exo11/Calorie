import { useState } from 'react'
import {addVerify, calc, initialCompute, initialResult} from 'utils'
import Context from 'context/Context'
import type { ICompute, IDiet, IUser } from 'model'

function Ctx({children}: {children: React.ReactNode}) {

  const [state, setState] = useState<number>(0)
  const [verify, setVerify] = useState<string>()
  const [compute, setCompute] = useState<ICompute>(initialCompute)
  const [result, setResult] = useState<IDiet>(initialResult)
  const [how, setHow] = useState<boolean>(false)

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()

    const formHandler = () => {
      const target = evt.target as HTMLFormElement
      const user = Object.fromEntries(new FormData(target)) as unknown as IUser
      const validate = addVerify(user)
      setVerify(validate)
      if (!validate) {
        setCompute(calc(user))
        setState(1)
      }
    }

    const cardsHandler = () => {
      const {plan} = result
      if (!plan || plan === 'error') {
        setResult({...initialResult, plan: 'error'})
      } else {
        setState(3)
      }
    }
    
    if (state === 0) { 
      formHandler()
    } else if (state === 2) { 
      cardsHandler()
    } else {
      setState(p => p + 1)
    }
  }
  
  const onChange = () => setVerify(undefined)
  
  const onResult = (evt: React.MouseEvent) => {
    const {diet} = (evt.target as HTMLButtonElement).dataset
    if (diet) setResult(JSON.parse(diet))
  }
  
  const onHow = () => setHow(p => !p)

  const ctx = {state, how, verify, compute, result, onHow, onSubmit, onChange, onResult}

  return (
    <Context.Provider value={ctx}>
      {children}
    </Context.Provider>
  )

}

export default Ctx