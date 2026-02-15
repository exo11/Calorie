import Radio from 'components/form/Radio'

function RadioGroup({verify}: {verify?: string}) {

  const inv = verify === 'activity' ? 'text-rose-300' : 'text-black'

  return (
    <div className="hidden lg:block lg:w-100">
      <h5 className={`mb-6 text-lg font-bold lg:pt-6 ${inv}`}>Активность</h5>
      <Radio value="low" label="Слабая" >
        Сидячая работа, отсутсвие занятий или выполнение легких упраажннений
      </Radio>
      <Radio value="middle" label="Средняя">
        Активная работа, занятия в зале до 3-х раз в неделю
      </Radio>
      <Radio value="high" label="Высокая">
        Физически аквтиная работа или интенсивные тренировки в зале 3-5 раз в неделю
      </Radio>
    </div>
  )

}

export default RadioGroup

