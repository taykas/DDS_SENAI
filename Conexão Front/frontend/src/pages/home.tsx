import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  category: string;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/products/listproducts"
      );
      setProducts(response.data.message);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-amber-700 p-4 flex items-start justify-center">
      {products.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          Nenhum produto encontrado
        </div>
      ) : (
        <div className=" w-[50vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-blue-600 rounded-lg overflow-hidden"
            >
              <div className="bg-amber-50 p-4 flex flex-col justify-between h-full">
                <h1 className="font-bold text-lg mb-2">{product.name}</h1>
                <p className="text-sm mb-1">Categoria: {product.category}</p>
                <p className="text-sm mb-1">Preço: R${product.price}</p>
                <p className="text-sm">Estoque: {product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};