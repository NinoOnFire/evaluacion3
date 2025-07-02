import React, { useState, useEffect } from "react";
import './Components.css';

export default function ThemeToggle() {
    const [modoClaro, setModoClaro] = useState(false);
  
    useEffect(() => {
      if (modoClaro) {
        document.body.classList.add("modo-claro");
      } else {
        document.body.classList.remove("modo-claro");
      }
    }, [modoClaro]);
  
    return (
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
