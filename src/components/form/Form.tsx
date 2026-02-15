import FormGroup from 'components/form/FormGroup'
import RadioGroup from '@components/form/RadioGroup'
import type { FormProps } from 'model'

function Form({verify, onSubmit, onChange}: FormProps) {
  
  return (
    <div className="hidden group-data-[state=0]:block">
      <form 
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