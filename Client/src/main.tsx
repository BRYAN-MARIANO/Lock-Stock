import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-blue-500">¡Hola, Mundo!</h1>
        <p className="text-gray-600 mt-4">
          Este es un ejemplo de texto con Tailwind CSS.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600">
          Haz clic aquí
        </button>
      </div>
  </React.StrictMode>,
)
