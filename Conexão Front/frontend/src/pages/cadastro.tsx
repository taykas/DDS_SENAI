import { Link } from "react-router-dom";

export const Cadastro= () => {
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
                        type="text"
                        placeholder="Nome Completo"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                        <input
                        type="text"
                        placeholder="Email"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />
                        
                        <input
                        type="password"
                        placeholder="Senha"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                        <input
                        type="password"
                        placeholder="Confirme sua senha"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                    </section>

                    <section className="flex flex-col items-center justify-center gap-2">
                        <button className="bg-amber-800 text-white p-[2%] w-[10vw] h-[4vh] rounded-2xl hover:bg-amber-700">
                            Criar Conta
                        </button>
                        <Link to="/">Entrar</Link>
                    </section>

                </div>
            </div>
        </div>
    );
};