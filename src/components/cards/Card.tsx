import useCtx from 'hooks/useCtx'
import { type CardProps } from 'model'

function Card({diet, children}: CardProps) {

  const {onResult} = useCtx()
  
  const btnCls = `
    gsapCardsBtn
    btn
    btn-hover
    w-28 
    h-9 
    rounded-lg
    font-normal 
    shadow-sm
    p-0 
    mx-auto 
    mt-0 
    mb-4
    transform-[scale(0.9)]
    lg:w-32
    lg:text-[16px]
    2xl:w-40
    2xl:h-10
  `
  const titleCls = `
    mt-5 
    mb-1 
    text-lg
    bg-linear-to-r
    from-sky-700
    to-stone-500
    text-transparent
    bg-clip-text
    font-bold 
    lg:text-xl 
    2xl:text-2xl
  `
  return (
    <>
      <div>
        <h5 className={titleCls}>{diet.title}</h5>
        {children}
      </div>  
      <button 
        className={btnCls}
        onClick={onResult} 
        data-diet={JSON.stringify(diet)}>
        выбрать
      </button>
    </>
  )

}

export default Card