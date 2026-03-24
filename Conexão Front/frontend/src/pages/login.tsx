import { Link } from "react-router-dom";

export const Login = () => {
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
                type="text"
                placeholder="Email"
                className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
              />
  
              <section className="flex flex-col">
                <input
                  type="password"
                  placeholder="Senha"
                  className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                />
  
                <a href="#" className="self-end hover:text-amber-700">
                  Esqueceu a senha?
                </a>
              </section>
  
            </section>
  
            <button className="bg-amber-800 text-white p-[2%] w-[10vw] h-[4vh] rounded-2xl hover:bg-amber-700">
              Entrar
            </button>
  
            <Link to="/cadastro" className="text-amber-800 hover:text-amber-700">
                Criar uma Conta
            </Link>
  
          </div>
        </div>
      </div>
    );
  };