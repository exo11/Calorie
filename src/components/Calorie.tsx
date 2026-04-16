import { useRef } from 'react'
import useAnimation from 'hooks/useAnimation'
import useCtx from 'hooks/useCtx'
import Calc from 'components/calc/Calc'
import Form from 'components/form/Form'
import Line from 'components/line/Line'
import Cards from 'components/cards/Cards'
import Result from 'components/result/Result'

function Calorie() {
  
  const container = useRef(null)
  const {state, compute} = useCtx()
  useAnimation(state, container, compute)

  return (
    <div ref={container}>
      <Calc>
        <Form />
        <Line/>
        <Cards/>
        <Result/>
      </Calc>
    </div>
  )

}

export default Calorie