import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Cadastro= () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/register', {name, email, password})
            Swal.fire({
                title: 'Registrado',
                text: 'Usuário cadastrado com sucesso!',
                icon: 'success'
            })
            return navigate('/login')
        } catch {
            return Swal.fire({
                title: "Erro!",
                text: "Não foi possível regitrar!",
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
                <h1 className="text-3xl">Criar uma Conta</h1>

                <div className="flex flex-col items-center justify-center m-[10%] gap-4">

                    <section className="flex flex-col items-center justify-center gap-5 mb-[]">

                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Nome Completo"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />
                        
                        <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Senha"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                    </section>

                    <section className="flex flex-col items-center justify-center gap-2">
                        <button onClick={handleRegister} className="bg-amber-800 text-white p-[2%] w-[10vw] h-[4vh] rounded-2xl hover:bg-amber-700">
                            Criar Conta
                        </button>
                        <Link to="/login">Entrar</Link>
                    </section>

                </div>
            </div>
        </div>
    );
};