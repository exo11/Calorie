import type { InputProps } from 'model'

function Input({id, name, holder, verify}: InputProps) {

  const inv = name === verify ? 'border-rose-300' : 'border-gray-300'

  const labelCls = `
    flex 
    items-center 
    w-full 
    h-15 
    rounded-xl 
    relative 
    shadow
    border
  `
  const inputCls = `
    w-full 
    h-full 
    text-gray-900 
    bg-transparent 
    border-0 
    rounded-[5px] 
    z-2 
    pl-7 
    text-lg
    focus:shadow-none 
    focus:outline-none
  `
  return (
    <div className="mb-0 mt-7">
      <label className={`${labelCls} ${inv}`}>
        <input 
          type="text"
          className={`${inputCls}`}
          id={id}
          name={name} 
          placeholder={holder}>
        </input>
      </label>
    </div>
  )

}

export default Input