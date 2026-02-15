import type { RadioProps } from 'model'

function Radio({value, label, check, children}: RadioProps) {

  const addId = (value: string) => `activityRadio${value}`

  const before = `
    before:absolute 
    before:content-[''] 
    before:block 
    before:w-5 
    before:h-5 
    before:rounded-full 
    before:-left-7
    before:top-0 
    before:border
    before:border-gray-300
    peer-checked/radio:before:bg-blue-100
    before:shadow-lg
  `
  const labelCls = `
    relative 
    ml-4 
    text-lg 
    font-bold 
    tracking-normal 
    text-blue-400 
    rounded 
    cursor-pointer
    ${before}
  `
  return (
    <div className="mb-3">
      <input className="hidden peer/radio" 
        type="radio" 
        name="activity" 
        id={addId(value)} 
        defaultChecked={check}
        value={value}>
      </input>
      <label className={labelCls} htmlFor={addId(value)}>{label}</label>
      <div className="pt-1 ml-4 text-sm text-gray-800">{children}</div>
    </div>
  )

}

export default Radio