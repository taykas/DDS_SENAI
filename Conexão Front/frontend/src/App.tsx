import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro"
import { Products } from "./pages/home"
import { CadastroProduto } from "./pages/cadastroProduto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Products />} />
        <Route path="/cadastroProduto" element={<CadastroProduto />} />
      </Routes>
    </BrowserRouter>
  );
}