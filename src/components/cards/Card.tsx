import type { CardProps } from 'model'

function Card({diet, onResult, children}: CardProps) {

  

  const cls = `
    w-28 
    h-9 
    rounded-lg
    text-sm 
    font-normal 
    bg-blue-300
    shadow-sm
    shadow-blue-300/50 
    p-0 
    text-white 
    mx-auto 
    mt-0 
    mb-4
    duration-[0.3s] 
    cursor-pointer
    hover:bg-sky-300
    lg:w-32
    lg:text-[16px]
    2xl:w-40
    2xl:h-10
  `
  return (
    <>
      <div>
        <h5 className="mt-5 mb-1 text-lg font-bold lg:text-xl 2xl:text-2xl">{diet.title}</h5>
        {children}
      </div>
      <button 
        className={cls}
        onClick={onResult} 
        data-diet={JSON.stringify(diet)}>
        выбрать
      </button>
    </>
  )

}

export default Card