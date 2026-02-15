import { lineCircle } from 'utils'
import type { ISegment, SegmentsProps } from 'model'

function Segments({weight, segments}: SegmentsProps) {
  
  const circle = lineCircle(weight, segments)
  
  const addSegments = (arr: ISegment[]) => arr.map(({name, color, border}, i) => {
    
    const rounded = i === 0 ? 'rounded-l-lg' : i === arr.length - 1 ? 'rounded-r-lg' : ''
    const op = circle.name === name ? 'opacity-100' : 'opacity-0'
    
    const cls = `
      absolute 
      left-0 
      block 
      w-6 
      h-6 
      -ml-4 
      transition-[1s] 
      bg-white 
      rounded-full 
      -top-1.5 
      z-1 
      ${border} 
      ${op}
      left-[${circle.pr}]
    `
    return (
      <div 
        key={`line-segment${i}`} 
        className={`relative h-2 w-[20%] ${color} ${rounded} lg:h-3`}
      >
        <div className={cls}></div>
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



