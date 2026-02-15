import type { IDiet } from 'model'
import { cardsDate } from 'utils'

function CardContent({diet}: {diet: IDiet}) {

  const date = cardsDate().after
  const {cal, monthMinus, threeMonthMinus, newWeight} = diet

  const btnCls = `
    w-40 
    pb-3 
    mx-auto 
    my-0 
    text-lg 
    font-normal 
    text-blue-500 
    border-b 
    border-b-blue-500
    lg:text-xl
  `
  const contentCls = `
    mx-auto 
    text-sm 
    font-bold 
    text-gray-600 
    lg:text-[15px]
    2xl:text-[16px]
  `
  return (
    <>
      <div className={btnCls}>
        <span>{cal}</span> 
        <span>ккал/день</span>
      </div>
      <div className={`w-40 my-3 lg:w-42 ${contentCls}`}>
        <span>При соблюдении этого плана через месяц Вы похудеете на </span> 
        <span>{monthMinus}</span> 
        <span> кг</span></div>
      <div className={`mt-0 mb-5 w-33 lg:w-37 ${contentCls}`}>
        <span>Через три месяца</span> 
        <span>{` (${date}) Ваш вес составит ${newWeight} кг (-${threeMonthMinus} кг)`}</span>
      </div>
    </>
  )

}

export default CardContent