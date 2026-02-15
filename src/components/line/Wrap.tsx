import type { WrapProps } from 'model'

function Wrap({cls, title, type, value}: WrapProps) {

  return (
    <div className={`${cls} mb-7`}>
      <h5 className="text-xl font-bold text-black lg:text-lg">{title}</h5>
      <div className="text-[30px] font-bold text-blue-400 lg:text-[36px]">
        <span className={`cal-calc-${type}-weight`}>{value}</span>
        <span>кг</span>
      </div>
    </div>
  )

}

export default Wrap