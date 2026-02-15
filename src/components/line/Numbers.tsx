import type { ISegment } from 'model'

function Numbers({segments}: {segments: ISegment[]}) {

  const addNumbers = (arr: ISegment[]) => arr.map((segment, i) => {
    return (
      <div 
        key={`line-number${i}}`} 
        className="w-[20%] text-[12px] font-normal text-center lg:text-lg"
      >
        {segment.f}
      </div>)
  })

  return (
    <div className="flex justify-center w-full">
      {addNumbers(segments)}
    </div>
  )

}

export default Numbers

