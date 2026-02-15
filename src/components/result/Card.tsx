import type { ResultCardProps } from 'model'

function Card({result, date}: ResultCardProps) {

  const {title, cal, monthMinus, threeMonthMinus, newWeight} = result
  
  return (
    <div className="rounded-[20px] shadow-xl py-7 px-6 lg:pt-4 lg:-mt-4 lg:max-w-90">
      <h5 className="mb-5 lg:mb-3">Вы выбрали план похудения:</h5>
      <div>
        <h5 className="text-sm font-normal lg:text-lg xl:mb-1">{title}</h5>
        <div className="m-0">{cal} ккал/день</div>
        <div className="text-[12px] font-normal my-3 mx-0 w-62 lg:text-sm lg:w-auto lg:mb-2 lg:max-w-78">
          <span>При соблюдении этого плана через месяц Вы похудеете на {monthMinus} кг</span>
        </div>
        <div className="m-0 w-53 text-[12px] font-bold lg:text-sm lg:w-auto lg:max-w-60 lg:m-0">
          <span>{`Через три месяца (к ${date}) Ваш вес составит ${newWeight} кг (-${threeMonthMinus} кг)`}</span>
        </div>
      </div>
    </div>
  )

}

export default Card