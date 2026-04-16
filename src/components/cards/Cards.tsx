import Title from 'components/cards/Title'
import Card from 'components/cards/Card'
import CardContent from 'components/cards/CardContent'
import type { IDiet } from 'model'
import useCtx from 'hooks/useCtx'

function Cards() {

  const {compute, result} = useCtx()
  
  const wrapCls = `
    gsapCardsCard
    rounded-lg
    even:mx-5
    border
    shadow-sm 
    text-center 
    w-51 
    min-w-51
    opacity-100
    lg:w-60
    lg:even:mx-10
    2xl:mx-0
    2xl:w-67 
  `
  const rowCls = `
    flex 
    items-start 
    w-full 
    pt-5 
    pb-3 
    overflow-x-auto 
    scrollbar 
    2xl:justify-between
  `
  const addCards = (arr: IDiet[]) => arr.map((obj, i) => {
    const choice = `
      text-sky-400 
      border-sky-400 
      [&_button]:bg-linear-to-r 
      [&_button]:from-blue-300 
      [&_button]:to-cyan-300
    `
    const active = obj.plan === result.plan ? choice : 'border-gray-200'
    const actionCls = result.plan === 'error' ? 'border-rose-300' : active
      
    return (
      <div 
        key={`${obj.plan + i}`} 
        className={wrapCls + actionCls} 
        data-plan={obj.plan}
      >
        <Card diet={obj}>
          <CardContent diet={obj}/>
        </Card>
      </div>
    )
  
  })

  return (
    <div className="hidden group-data-[state=2]:block">
      <Title />
      <div className={rowCls}>
        {addCards(compute.diet)}
      </div>
    </div>
  )

}

export default Cards