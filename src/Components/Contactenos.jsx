import Header from "./Header";
import './Components.css';

function Contactenos() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contáctenos</h2>
        <form className="contact-form">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
                type="text"
                id="nombre"
                name="nombre"
                pattern="[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}"
                title="Solo letras y espacios, mínimo 2 caracteres"
                required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" name="edad" min="0" max="120" required />

          <label htmlFor="fecha">Fecha de contacto:</label>
          <input type="date" id="fecha" name="fecha" defaultValue={today} readOnly />

          <label htmlFor="motivo">Motivo de contacto:</label>
          <select id="motivo" name="motivo" required>
            <option value="">--Seleccione--</option>
            <option value="consulta">Consulta</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="reclamo">Reclamo</option>
          </select>

          <label>
            <input type="checkbox" name="acepto" required />
            Acepto los términos y condiciones
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contactenos;

