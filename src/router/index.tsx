import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Login} from "../pages/Login";
import {Home} from "../pages/Home";
import {NovoPost} from "../pages/NovoPost";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate  to="/login" />} />

        <Route path={"/home"} element={<Home />} />

        <Route path={"/novo-post"} element={<NovoPost />} />


      </Routes>
    </BrowserRouter>
  );
};
