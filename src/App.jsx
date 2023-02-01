import { useState } from 'react'
import './App.css'
import cube from './assets/images/icon-dice.svg'
import separator from './assets/images/pattern-divider-desktop.svg'

function App() {

  return (
    <div className="App">
      <div className='bg-blue-300 h-screen flex items-center justify-center'>
        <div className="max-w-xl rounded-xl bg-blue-200 py-10 px-10 text-center shadow-2xl relative">
          <div className="text-green text-xs uppercase font-extrabold tracking-widestXL">ADVICE #117</div>
          <div className="py-6 text-cyan text-3xl font-extrabold">"If you are feeling down, try holding a pencil between your top lip and your nose for five minutes."</div>
          <div className="w-full mb-5">
            <img className="mx-auto" src={separator} alt="" />
          </div>
          <button className='hover:shadow-shadow absolute -bottom-8 right-2/4 translate-x-2/4 h-16 w-16 rounded-full bg-green flex items-center justify-center'>
            <img src={cube} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
