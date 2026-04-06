import { useState, useEffect } from "react"
import axios from 'axios'

interface Product {
  id: string
  name: string
  stock: number
  price: number
  category: string
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/products/listproducts")
    setProducts(response.data.message) 
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="w-screen h-screen bg-amber-700">
      {/* {products.length === 0 && (
          <div className="text-center py-10 text-gray-400">
              Nenhum produto encontrado
          </div>
      )} */}

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>Categoria: {product.category}</p>
            <p>Preço: R${product.price}</p>
            <p>Estoque: {product.stock}</p>
          </div>
        )
      })}
    </div>
  )
}