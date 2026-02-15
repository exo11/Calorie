import Title from 'components/cards/Title'
import Card from 'components/cards/Card'
import CardContent from 'components/cards/CardContent'
import type { CardsProps, IDiet } from 'model'

function Cards({compute, plan, onResult}: CardsProps) {
  
  const {diet} = compute
  
  const wrapCls = `
    rounded-lg
    even:mx-5
    border
    shadow-sm 
    text-center 
    w-51 
    min-w-51
    duration-[0.3s]
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
  const addCards = (arr: IDiet[]) => arr.map((diet, i) => {
    const choice = `text-sky-400 border-sky-400 [&_button]:bg-sky-300`
    const active = diet.plan === plan ? choice : 'border-gray-200'
    const actionCls = plan === 'error' ? 'border-rose-300' : active
      
    
    return (
      <div 
        key={`${diet.plan + i}`} 
        className={wrapCls + actionCls} 
        data-plan={diet.plan}
      >
        <Card diet={diet} onResult={onResult}>
          <CardContent diet={diet}/>
        </Card>
      </div>
    )
  
  })

  return (
    <div className="hidden group-data-[state=2]:block">
      <Title />
      <div className={rowCls}>
        {addCards(diet)}
      </div>
    </div>
  )

}

export default Cards