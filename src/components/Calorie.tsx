import { useState } from 'react'
import { useRef } from 'react'
import {addVerify, calc, initialCompute, initialResult} from 'utils'
import useAnimation from 'hooks/useAnimation'
import Calc from 'components/calc/Calc'
import Form from 'components/form/Form'
import Line from 'components/line/Line'
import Cards from 'components/cards/Cards'
import Result from 'components/result/Result'
import type { IUser, ICompute, IDiet } from 'model'

function Calorie() {

  const [state, setState] = useState<number>(0)
  const [verify, setVerify] = useState<string>()
  const [compute, setCompute] = useState<ICompute>(initialCompute)
  const [result, setResult] = useState<IDiet>(initialResult)
  const [how, setHow] = useState<boolean>(false)
  const container = useRef(null)

  useAnimation(state, container, compute)

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
  
  return (
    <div ref={container}>
      <Calc state={state} how={how} onHow={onHow}>
        <Form onSubmit={onSubmit} onChange={onChange} verify={verify} />
        <Line compute={compute} onHow={onHow} />
        <Cards compute={compute} plan={result.plan} onResult={onResult} />
        <Result compute={compute} result={result} />
      </Calc>
    </div>
  )

}

export default Calorie