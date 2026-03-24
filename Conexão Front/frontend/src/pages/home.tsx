import { useState, useEffect } from "react"
import axios from 'axios'

export const Products = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/products/listproducts')
    setProducts(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
     {
      products.map((product) => {
        return (
        <div className='bg-purple-400'>
          <div className='bg-purple-200 w-80 h-70 m-5 p-5'>
            <h1>Produto: {product.name}</h1>
            <br />
            <span>Valor: R${product}</span>
            <br />
            <span>Descrição: {product}</span>
            <br />
            <span>Estoque: {product}</span>
          </div>
        </div>)
      })
     }
    </>
  )
}

