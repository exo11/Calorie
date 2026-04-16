import useCtx from 'hooks/useCtx'
import { cardsDate } from 'utils'
import Col from 'components/result/Col'
import Card from 'components/result/Card'

function Result() {

  const {compute} = useCtx()

  const {weight, ideal, diff, calories} = compute
  const {today, after} = cardsDate()
  const action = (diff: number) => diff > 0 ? 'сбросить' : 'набрать'

  const titleCls = `
    text-[24px] 
    font-bold 
    mt-6 
    mb-4
  `
  return (
    <div className="hidden group-data-[state=3]:block">
	    <h3 className={titleCls}>РЕЗУЛЬТАТЫ</h3>
      <div className="lg:flex lg:items-start">
        <div className="lg:mr-7 lg:w-87 lg:min-w-87 2xl:mr-19">

          <div className="flex pb-5 lg:justify-between">
            
            <Col 
              cls={{col:'mr-[15%] lg:mr-0 lg:w-43', title:'mb-1'}}
              title="Ваш вес на сегодня"
            >
              <span className="text-sm font-normal text-blue-400">{today}</span>
              <div className="text-xl lg:mt-1">
                <span>{weight}</span> 
                <span>кг</span>
              </div>
            </Col>
            
            <Col 
              cls={{col:'lg:w-35', title:'lg:mb-1'}} 
              title="Ваш идеальный вес"
            >
              <div className="mt-6 text-xl lg:mt-0">
                <span>{Math.round(ideal)}</span>
                <span>кг</span>
              </div>
            </Col>
          
          </div>
          
          <Col 
            cls={{
              col:'flex items-center border-y pt-6 pb-9 lg:py-5 lg:px-0 lg:justify-between', 
              title:'mb-0 max-w-54 mr-[20%] lg:mr-0 lg:max-w-64'
            }} 
            title={`Для достижения идеального веса Вам нужно ${action(diff)}`}
          >
            <div className="mr-5 text-xl lg:mt-2">
              <span>{Math.abs(Math.round(diff))}</span>
              <span>кг</span>
            </div>
          </Col>
          
          <Col 
            cls={{col:'pt-2 pb-4 lg:pt-5', title:'mb-5 lg:mb-3'}}
            title=""
          >
            <div className="flex text-xl mt-n2 mt-md-0 text-nowrap">
              <div className="mr-3 mt-n1">
                <span className="material-icons">balance</span>
              </div>
              <span>
                <span>{calories}</span> 
                <span>ккал/день</span>
              </span>
            </div>
          </Col>
        
        </div>
		
        <Card date={after}/>

	    </div>
    </div>
  )

}

export default Result