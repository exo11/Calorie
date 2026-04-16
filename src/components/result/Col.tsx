import type { ColProps } from 'model'

function Col({cls, title, children}: ColProps) {

  return (
    <div className={cls.col}>
      <h5 className={`cal-calc-weight-title ${cls.title}`}>{title}</h5>
      {children}
    </div>
  )

}

export default Col