import React, { useState, useEffect } from "react";
import './Components.css';


export default function ThemeToggle() {
  // Hook de estado que guarda si está activado el modo claro (por defecto, no)
  const [modoClaro, setModoClaro] = useState(false);

  // useEffect se ejecuta cada vez que cambia el valor de modoClaro
  useEffect(() => {
    if (modoClaro) {
      // Si está activado el modo claro, se agrega la clase al body
      document.body.classList.add("modo-claro");
    } else {
      // Si no, se remueve la clase del body
      document.body.classList.remove("modo-claro");
    }
  }, [modoClaro]); // Dependencia: se ejecuta solo cuando cambia modoClaro

  return (
    // Botón que alterna entre modo claro y oscuro al hacer clic
    <button
      onClick={() => setModoClaro(!modoClaro)} 
      style={{
        padding: "0.7rem 1.5rem",               
        fontSize: "1rem",                      
        borderRadius: "8px",                    
        cursor: "pointer",                      
        border: "none",                        
        backgroundColor: modoClaro ? "#222" : "#eee", 
        color: modoClaro ? "#eee" : "#222",     
        transition: "all 0.3s ease",            
      }}
    >
      
      {modoClaro ? "Modo Oscuro" : "Modo Claro"}
    </button>
  );
}
