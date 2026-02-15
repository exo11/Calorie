import type { SelectProps } from 'model'

function Select({id, name, verify, children}: SelectProps) {
  
  const addCls = (name: string) => name === 'activity' ? 'lg:hidden' : ''
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
  const selectCls = `
    w-full 
    h-full 
    text-gray-900 
    bg-transparent 
    border-0 
    rounded-[5px] 
    z-2 
    pl-7 
    text-lg 
    appearance-none
    focus:shadow-none 
    focus:outline-none 
  `
  return (
    <div className={`mb-0 mt-7 ${addCls(name)}`}>
      <label className={`${labelCls} ${inv}`} htmlFor={`calc${id}`}> 
        <select 
          id={`calc${id}`}
          name={name} 
          autoComplete="off"
          className={`${selectCls}`}>
          {children}
        </select>
        <div className="absolute z-1 right-6">
          <span className="material-icons">keyboard_arrow_down</span>
        </div>
      </label>
    </div>
  )

}

export default Select