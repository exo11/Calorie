import useCtx from 'hooks/useCtx'
import FormGroup from 'components/form/FormGroup'
import RadioGroup from 'components/form/RadioGroup'

function Form() {

  const {verify, onSubmit, onChange} = useCtx()
  
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