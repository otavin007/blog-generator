import React from "react";


interface MenuItemProps {
  itens: Item[];
}

export interface Item {
  text: string;
  linkTo: string;
  icon: string;
  admin?: boolean;
}

export  const MenuItemNB = (props: MenuItemProps) => {


  const addLineBreaks = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <React.Fragment key={index}>
        <p>{word}</p>
      </React.Fragment>
    ));
  };

  return(
    <div className={`flex hover:text-blue-600 justify-center max-w-[1256px] pt-2 mx-auto flex-wrap`}>
      {props.itens.map((item, i)=>(
        <div className={"bg-[#a2b5ba] border-2 border-gray-700 m-6 rounded-xl flex flex-shrink-1 "}>
          <a className={`min-w-36 size-36 flex flex-col items-center justify-center `} href={item.linkTo}>
            {/*<item.icon/>*/}
            <span
              className={` text-md text-black font-bold flex flex-col items-center pt-1`}>{addLineBreaks(item.text)}</span>
          </a>
        </div>
      ))}
    </div>
  )
}
