import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FormGroup from 'components/form/FormGroup'
import RadioGroup from '@components/form/RadioGroup'
import type { FormProps } from 'model'

function Form({verify, onSubmit, onChange}: FormProps) {
  
  gsap.registerPlugin(useGSAP)
  const container = useRef(null)
  
  useGSAP(() => {
    
    const tl = gsap.timeline({ 
      defaults: { duration: .5, ease: 'back.out', opacity: 0} 
    })
    
    tl.from('.gsapFG', {x: -100, stagger: .2}) // TARGET IN INPUT, SELECT
      .from('.gsapRadio', {x: 100, stagger: .2}, '<') // TARGET IN RADIO, RADIOGROUP
        
  }, { dependencies: [], scope: container })

  return (
    <div className="hidden group-data-[state=0]:block">
      <form
        ref={container}
        id="calc" 
        className="lg:flex" 
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <FormGroup verify={verify}/>
        <RadioGroup verify={verify}/>
      </form>
    </div>
  )

}

export default Form