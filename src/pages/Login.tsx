import {HeaderNB} from "../components/header/HeaderNB";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate()

  return(
    <div className={`w-screen h-screen  bg-[#CAE0E6]`}>
      <HeaderNB label={"LOGIN - ADM"} />
      <div className={"w-screen flex mt-[10%] flex-col items-center justify-center"}>
        <div className={"bg-[#a2b5ba] rounded-xl w-2/4 items-center flex flex-col"}>
          <div className={`h-10`}/>
          <TextField className={"bg-white rounded mt-10"}
                     id="outlined-required"
                     label="Login"
          />
          <div className={`h-10`}/>
          <TextField className={"bg-white rounded mt-10"}
                     id="outlined-password-input"
                     label="Senha"
                     type="password"
                     autoComplete="current-password"
          />

          <div className={`h-10`}/>
          <Button variant={"contained"} className={"w-2/4 "} onClick={()=>{navigate("/Home")}} color={"primary"}>Login</Button>
          <div className={`h-10`}/>
        </div>
        <div className={`h-10`}/>
        <Button variant={"outlined"} onClick={()=>{window.location.href = "https://nobotz.ai/"}} className={"w-1/6"} >Voltar</Button>
      </div>
    </div>
  )
}
