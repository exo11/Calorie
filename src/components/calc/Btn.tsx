import type { BtnProps } from 'model'

function Btn({form, children}: BtnProps) {

  const cls = `
    gsapCalcBtn
    btn
    btn-hover
    flex-center
    px-10 
    py-6
    font-bold
    rounded-lg
    w-44 
    h-9 
    mt-14
    shadow-lg
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