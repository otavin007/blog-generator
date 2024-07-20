


interface HeaderProps {
  label:String
}



export const HeaderNB = (props: HeaderProps) => {
  return(
    <div className={`w-screen bg-[#a2b5ba] h-[10%] flex items-center justify-center`}>
      <p className={`font-syne text-3xl`}>{props.label}</p>
   </div>
  )
}
