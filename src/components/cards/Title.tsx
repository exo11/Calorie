function Title() {

  const cls = `
    absolute 
    -top-16 
    right-0 
    text-blue-300 
    flex 
    items-center
    text-[12px] 
    font-bold 
    lg:text-sm 
    lg:font-bold 
    lg:static
  `
   return (
    <div className="relative flex items-center justify-between mt-10 xl:mt-8">
      <h5 className="relative mb-0 text-sm font-bold xl:text-lg xl:font-bold">
        <span>Выберите план похудения:</span>
      </h5>
      <div className={cls}>
        <span className="w-24 mr-2 lg:w-auto xl:mt-1">
          <span>Ваша суточная норма калорий</span>
        </span>
        <span className="material-icons lg:mt-1">error</span>
      </div>
    </div>
  )

}

export default Title


 

  