import type { HowProps } from "model"

function How({how, onHow}: HowProps) {

  const visible = how ? 'visible opacity-100' : 'invisible opacity-0'
  const translate = how ? 'translate-x-0' : 'translate-x-full'
  
  const contCls = `
    absolute 
    inset-0 
    flex 
    justify-end 
    z-2 
    rounded-[20px] 
    overflow-hidden 
    duration-300 
    ${visible}
  `
  const rowCls = `
    w-full 
    h-full
    px-5 
    py-0 
    bg-white 
    rounded-[20px] 
    max-w-105 
    duration-1000 
    ${translate}
  `
  const btnCls = `
    flex
    justify-center 
    items-center 
    py-3 
    px-7
    text-sm 
    font-bold 
    text-white 
    bg-blue-300 
    w-auto 
    h-9 
    rounded-lg
    cursor-pointer
    shadow-lg
    shadow-blue-300/50
    duration-[0.3s]
    hover:bg-sky-300
  `
  return (
    <div className={contCls}>
      <div className={rowCls}>
        <div className="w-full mx-0 my-auto wrapper h-25 max-w-79">
          <h5 className="text-lg font-bold text-black pt-13">Как это работает ?</h5>
          <div className="pt-6 text-sm">
            Мы берём среднее значение идеального веса полученное на основе 10 популярных формул таких как:
          </div>
          <ul className="pt-6 pl-5 mb-18 list-disc *:text-sm">
            <li>Формула Роберта Купера</li>
            <li>Формула Лоренца</li>
            <li>Формула Миллера</li>
            <li>Формула Робинсона</li>
            <li>Индекс Брока</li>
            <li>Формула Хамви</li>
            <li>Формула Наглера</li>
            <li>Формула Девина</li>
            <li>Индекс Брока-Бругша</li>
            <li>Индекс Брока c учетом возраста</li>
          </ul>
          <button onClick={onHow} className={btnCls}>
            <span>ПОНЯТНО</span>
          </button>
        </div>
      </div>
    </div>
  )

}

export default How