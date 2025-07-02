import { useState, useEffect } from "react";
import Header from "./Header";
import './Components.css';

function Comentarios() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  // Cargar comentarios al inicio
  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem("comentarios")) || [];
    setComentarios(almacenados);
  }, []);

  // Guardar en localStorage
  const actualizarLocalStorage = (nuevosComentarios) => {
    localStorage.setItem("comentarios", JSON.stringify(nuevosComentarios));
  };

  // Agregar comentario nuevo
  const agregarComentario = () => {
    if (comentario.trim() === "") return;
    const ahora = new Date();
    const nuevo = {
      id: ahora.getTime(),
      texto: comentario,
      hora: ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const nuevosComentarios = [nuevo, ...comentarios];
    setComentarios(nuevosComentarios);
    actualizarLocalStorage(nuevosComentarios);
    setComentario("");
  };

  // Eliminar comentario
  const eliminarComentario = (id) => {
    const filtrados = comentarios.filter((c) => c.id !== id);
    setComentarios(filtrados);
    actualizarLocalStorage(filtrados);
  };

  // Iniciar edición
  const editarComentario = (id, texto) => {
    setEditandoId(id);
    setTextoEditado(texto);
  };

  // Guardar comentario editado
  const guardarComentarioEditado = (id) => {
    const actualizados = comentarios.map((c) =>
      c.id === id ? { ...c, texto: textoEditado } : c
    );
    setComentarios(actualizados);
    actualizarLocalStorage(actualizados);
    setEditandoId(null);
    setTextoEditado("");
  };

  return (
    <>
      <Header />
      <div className="comentarios-container">
        <h2>Comentarios</h2>
        <textarea
          placeholder="Escribe tu comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button onClick={agregarComentario}>Publicar</button>

        <ul className="comentarios-lista">
          {comentarios.length === 0 && <li>No hay comentarios aún.</li>}
          {comentarios.map((c) => (
            <li key={c.id}>
              {editandoId === c.id ? (
                <>
                  <textarea
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                  />
                  <button onClick={() => guardarComentarioEditado(c.id)}>Guardar</button>
                  <button onClick={() => setEditandoId(null)}>Cancelar</button>
                </>
              ) : (
                <>
                  <div>{c.texto}</div>
                  <span className="hora-comentario">🕒 {c.hora}</span>
                  <button onClick={() => editarComentario(c.id, c.texto)}>Editar</button>
                  <button onClick={() => eliminarComentario(c.id)}>Eliminar</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comentarios;
