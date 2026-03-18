import type { ISegment } from 'model'

function Numbers({segments}: {segments: ISegment[]}) {

  const cls = `
    gsapLineNumber 
    w-[20%] 
    text-[12px] 
    font-normal 
    text-center
    opacity-0
    lg:text-lg 
  `
  const addNumbers = (arr: ISegment[]) => arr.map((segment, i) => {
    return (
      <div key={`line-number${i}}`} className={cls}>{segment.f}</div>
    )
  })

  return (
    <div className="flex justify-center w-full">
      {addNumbers(segments)}
    </div>
  )

}

export default Numbers

