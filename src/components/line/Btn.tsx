function Btn({onHow}: {onHow: () => void}) {

  const cls = `
    flex 
    items-center 
    justify-start 
    w-48 
    text-xl
    font-bold
    rounded
    text-blue-900 
    cursor-pointer
  `
  return (
    <button 
      onClick={onHow} 
      className={cls}
    >
      <span>Как это работает ?</span>
    </button>
  )

}

export default Btn