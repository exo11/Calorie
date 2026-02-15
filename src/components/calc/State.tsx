import type { StateProps } from "model"

function State({num, group}: StateProps) {
  
  const cls = `
    w-4.5 
    h-4.5 
    flex 
    justify-center 
    items-center 
    text-gray-400 
    rounded-full 
    ${group}
  `
  return (
    <div className={cls}>
      <div className="text-sm">{num}</div>
    </div>
  )

}

export default State