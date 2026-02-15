import type { BtnProps } from 'model'

function Btn({form, children}: BtnProps) {

  const cls = `
    flex 
    items-center 
    justify-center 
    px-10 
    py-6
    text-sm 
    text-white 
    font-bold
    bg-blue-300 
    rounded-lg
    w-44 
    h-9 
    mt-14
    cursor-pointer
    shadow-lg
    shadow-blue-300/50
    duration-[0.3s]
    hover:bg-sky-300
  `
  return (
    <button 
      form={form} 
      className={cls}>
      <span>{children}</span>
    </button>
  )

}

export default Btn