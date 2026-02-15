import State from 'components/calc/State'
import Btn from 'components/calc/Btn'
import How from 'components/calc/How'
import type { CalcProps } from 'model'

function Calc({state, how, onHow, children}: CalcProps) {

  const addGroup = (n: number) => `
    group-data-[state=${n}]:bg-blue-300 
    group-data-[state=${n}]:text-white
  `
  const contCls = `
    w-full 
    overflow-hidden 
    px-2.5 
    py-11
    xs:px-5 
    sm:px-12 
    md:px-38
    lg:flex 
    lg:justify-center 
    lg:py-27 
    lg:px-12 
    lg:my-0 
    lg:mx-auto 
    2xl:px-0
  `
  const rowCls = `
    relative 
    px-5 
    group 
    rounded-xl 
    py-11
    sm:px-12
    lg:px-7 
    lg:min-w-px 
    lg:w-auto
    2xl:w-248 
    2xl:px-16 
    2xl:pt-7
  `
  return (
    <div className="w-full my-5 font-nunito"> 
	    <div className={contCls}>
	      <div className={rowCls} data-state={state}>
	  	    <div className="flex justify-start">
            <State num={1} group={addGroup(0)}/>
            <State num={2} group={addGroup(1)}/>
            <State num={3} group={addGroup(2)}/>
            <State num={4} group={addGroup(3)}/>
          </div>
          {children}
          <div className="block group-data-[state=3]:hidden">
            <Btn form="calc">ДАЛЕЕ</Btn>
          </div>
		      <div className="hidden">
            <Btn>рассчитать заново</Btn>
          </div>
          <How how={how} onHow={onHow}/>
	      </div>
	    </div>  
    </div>
  )

}

export default Calc