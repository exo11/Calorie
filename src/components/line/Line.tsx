import { lineSegments, lineCircle } from 'utils'
import Wrap from 'components/line/Wrap'
import Numbers from 'components/line/Numbers'
import Segments from 'components/line/Segments'
import Content from 'components/line/Content'
import Btn from 'components/line/Btn'
import useCtx from 'hooks/useCtx'

function Line() {

  const {compute} = useCtx()

  const {weight, ideal, diff} = compute
  const segments = lineSegments(compute)
  const circle = lineCircle(weight, segments)
  const action = (diff: number) => diff > 0 ? 'сбросить' : 'набрать'
  
  const cls = `
    flex 
    flex-wrap 
    justify-start 
    mt-7 
    max-w-178 
    lg:justify-between 
    lg:mb-3 
    lg:min-w-170
  `
  return (
    <div className="hidden group-data-[state=1]:block">
	    <div className={cls}>
        <Wrap
          cls="mr-[15%] lg:max-w-31 lg:mr-0" 
          title="Текущий вес" 
          type="current" 
          value={weight}
        />
        <Wrap 
          cls="lg:max-w-36"
          title="Идеальный вес" 
          type="ideal" 
          value={Math.round(ideal)}
        />
        <Wrap
          cls="w-full max-w-83 lg:max-w-66 lg:mr-0"
          title={`Нужно ${action(diff)}`}
          type="diff" 
          value={Math.abs(Math.round(diff))}
        />
      </div>
      <div className="hidden mb-15 max-w-148 lg:max-w-full xs:block">
        <Numbers segments={segments}/>
        <Segments circle={circle} segments={segments}/>
        <Content />
      </div>
      <Btn />
    </div>
  )

}

export default Line