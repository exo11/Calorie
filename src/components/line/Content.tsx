function Content() {

 const childCls = `
  *:text-[10px] 
  *:text-center 
  *:font-normal 
  *:w-[20%] 
  *:lg:text-[14px]
`
  return (
    <div className={`flex w-full ${childCls}`}>
      <div>недостаток веса</div>
      <div>норма</div>
      <div>избыточный вес</div>
      <div>ожирение 1 стадия</div>
      <div>ожирение 2 стадия</div>
    </div>
  )

}

export default Content