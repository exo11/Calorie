import type { ColProps } from 'model'

function Col({cls, type, title, children}: ColProps) {

  return (
    <div className={`cal-calc-result-col cal-calc-result-col-${type} ${cls.col}`}>
      <h5 className={`cal-calc-weight-title ${cls.title}`}>{title}</h5>
      {children}
    </div>
  )

}

export default Col