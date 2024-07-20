import {HeaderNB} from "../components/header/HeaderNB";
import {Item, MenuItemNB} from "../components/menuItem/MenuItemNB";


export const Home = () => {

  const menuItems: Item[] = [
    {
      text: "Novo Post",
      linkTo: "/novo-post",
      icon: "",
    },
    {
      text: "Editar Post",
      linkTo: "/configuracao-geral",
      icon:  "",
    },
    {
      text: "Excluir Post",
      linkTo: "/cadastro",
      icon: "",
    },
    {
      text: "Todos os Posts",
      linkTo: "/neoconsig",
      icon: "",
    },
  ];

  return(
    <div className={`w-screen h-screen  bg-[#CAE0E6]`}>
      <HeaderNB label={"HOME - ADM"}/>

      <div className={` items-center `}>
        <div className={`flex flex-col  max-w-[1256px] `}>

          <MenuItemNB itens={menuItems}/>
        </div>
      </div>


    </div>
  )
}
