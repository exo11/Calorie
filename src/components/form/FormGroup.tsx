import Input from 'components/form/Input'
import Select from 'components/form/Select'

function FormGroup({verify}: {verify?: string}) {
  
  return (
    <div className="w-full lg:w-81 lg:min-w-81 lg:mr-15">
      
      <Select id="Gender" name="gender" verify={verify}>
        <option value="" hidden>Пол</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </Select>
      
      <Input id="calcAge" name="age" holder="Возраст" verify={verify}/>
      <Input id="calcHeight" name="height" holder="Рост, см" verify={verify}/>
      <Input id="calcWeight" name="weight" holder="Текущий вес, кг" verify={verify}/>
      
      <Select id="Activity" name="activity" verify={verify}>
        <option value="" hidden>Активность</option>
        <option value="low">Cлабая</option>
        <option value="middle">Средняя</option>
        <option value="high">Высокая</option>
      </Select>
    
    </div>
  )

}

export default FormGroup