import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
    {/* main */}
      <div className='bg-amber-50 h-screen w-screen flex flex-col items-center justify-center'>
        
        {/* card login */}
        <div className='h-[60vh] w-[25vw] bg-amber-800 rounded-[5%] flex flex-col items-center justify-center text-white'>
          
          {/* conteúdo login */}
          <h1 className=''>Login</h1>
          <div className='flex flex-col items-center justify-center m-[10%]'>

            <section className='flex flex-col items-center justify-center'>
              <input type="text" placeholder='Email' className=' p-[2%] w-[20vw]'/>
              <input type="password" placeholder='Senha' className=' p-[2%] w-[20vw]'/>
              <a href="">Esqueceu a senha?</a>
            </section>

            <button>Entrar</button>

            <a href="">Criar uma Conta</a>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
