import type { ISegment, SegmentsProps } from 'model'

function Segments({circle, segments}: SegmentsProps) {

  const segCls = `
    gsapLineSegment
    relative 
    h-2 
    w-[20%] 
    lg:h-3  
    transform-[translateX(-50px)]
    opacity-0
    bg-linear-to-r
    border-l-[2px]
    border-l-white
  `
  const ballCls = `
    gsapLineBall
    absolute 
    left-0
    block 
    w-6 
    h-6 
    -ml-4 
    bg-white 
    rounded-full 
    -top-1.5 
    z-100 
    opacity-0
    border-7
  `
  const addSegments = (arr: ISegment[]) => arr.map(({name, color, border}, i) => {
    
    const rounded = i === 0 ? 'rounded-l-lg' : i === arr.length - 1 ? 'rounded-r-lg' : ''
    const ball = circle.name === name ? <div className={`${ballCls} ${border}`}></div> : null

    return (
      <div  key={`line-segment${i}`} className={`${segCls} ${rounded} ${color}`}>
        {ball}
      </div>
    )
  
  })

  return (
    <div className="relative flex w-full my-6 xl:mt-6">
      {addSegments(segments)}
    </div>
  )

}

export default Segments