import axios from "axios";
// import { ServerResponse } from "http";
import { useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

export const CadastroProduto= () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const createProduct = async () => {
        try {
            await axios.post("http://localhost:8080/api/products/createproduct", {
                name,
                description,
                category,
                stock,
                price
            })
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="bg-amber-800 h-screen w-screen flex flex-col items-center justify-center">

            {/* card login */}
            <div className="h-[60vh] w-[25vw] bg-amber-50 rounded-[5%] 
            flex flex-col items-center justify-center text-amber-800">

                {/* conteúdo login */}
                <h1 className="text-3xl">Cadastrar um Produto</h1>

                <div className="flex flex-col items-center justify-center m-[10%] gap-4">

                    <section className="flex flex-col items-center justify-center gap-5 mb-[]">

                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Nome Produto"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                        <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        placeholder="Categoria"
                        className="p-[2%] w-[20vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />

                        <div className="flex w-[100%] justify-between gap-4">
                            <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="number"
                            placeholder="Preço"
                            className="p-[2%] w-[9vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                            />
                            
                            <input
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            type="number"
                            placeholder="Estoque"
                            className="p-[2%] w-[10vw] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                            />
                        </div>
                        
                        
                        <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        placeholder="Descrição"
                        className="p-[2%] w-[20vw] h-[10vh] border-2 border-amber-700 rounded-2xl focus:border-amber-900 outline-none"
                        />



                    </section>

                    <section className="flex flex-col items-center justify-center mt-[3%]">
                    <button
                        onClick={createProduct}
                        className="bg-amber-800 text-white p-[2%] w-[10vw] h-[4vh] text-center rounded-2xl hover:bg-amber-700 flex items-center justify-center">
                        Cadastrar
                    </button>
                
                    </section>

                </div>
            </div>
        </div>
    );
};