import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", {
            email,
            password
        })

        sessionStorage.setItem('token', response.data.token)
        
        console.log(response.data)
        navigate("/home")
        return Swal.fire({
          title: "Sucess!",
          text: "Login efetuado com sucesso",
          icon: "success"
        })
    
    } catch (error: any) {
        return Swal.fire({
            title: "Error",
            text: "Email ou Senha invalidos",
            icon: "error"
        })
    }
}
  
    return (
      <div className="bg-amber-800 h-screen w-screen flex flex-col items-center justify-center">
        
        {/* card login */}
        <div className="h-[60vh] w-[25vw] bg-amber-50 rounded-[5%] 
        flex flex-col items-center justify-center text-amber-800">
          
          {/* conteúdo login */}
          <h1 className="text-3xl">Login</h1>
  
          <div className="flex flex-col items-center justify-center m-[10%] gap-4">
  
            <section className="flex flex-col items-center justify-center gap-7">
              
              <input
                value={email}
                type="email"
                placeholder="Email"
                className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                onChange={(e)=> setEmail(e.target.value)}
              />
  
              <section className="flex flex-col">
                <input
                  value={password}
                  type="password"
                  placeholder="Senha"
                  className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                  onChange={(e)=> setPassword(e.target.value)}
                />
  
                <a href="#" className="self-end hover:text-amber-700">
                  Esqueceu a senha?
                </a>
              </section>
  
            </section>

            <button onClick={() => login()}  className="bg-amber-800 text-white p-[2%] w-[10vw] h-[4vh] rounded-2xl hover:bg-amber-700">
              Entrar
            </button>
  
            <Link to="/cadastro"
              onClick={() => navigate("/home")} 
              className="text-amber-800 hover:text-amber-700">
                Criar uma Conta
            </Link>
  
          </div>
        </div>
      </div>
    );
  };