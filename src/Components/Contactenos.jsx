import { useState } from "react";
import Header from "./Header"; 

function Contactenos() {
  const today = new Date().toISOString().split("T")[0];

  // Estados para cada campo
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [motivo, setMotivo] = useState("");
  const [acepto, setAcepto] = useState(false);

  //Validación de entrada
  const Validacion = (e) => {
    e.preventDefault();

    const nombreVal = nombre.trim();
    const emailVal = email.trim();
    const edadVal = parseInt(edad);

    if (nombreVal.length < 2 || !/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombreVal)) {
      alert("El nombre debe contener solo letras y al menos 2 caracteres.");
      return;
    }

    if (!emailVal.includes("@")) {
      alert("Correo electrónico inválido.");
      return;
    }

    if (edadVal < 0 || edadVal > 120 || isNaN(edadVal)) {
      alert("Edad fuera de rango.");
      return;
    }

    if (!motivo) {
      alert("Debe seleccionar un motivo.");
      return;
    }

    if (!acepto) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    alert("Formulario enviado correctamente.");

    // Limpiar todos los campos
    setNombre("");
    setEmail("");
    setEdad("");
    setMotivo("");
    setAcepto(false);
  };

  return (
    <>
      <Header />
      <div className="contact-container">
        <h2>Contáctenos</h2>
        <form className="contact-form" onSubmit={Validacion}>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            pattern="[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{2,}"
            title="Solo letras y espacios, mínimo 2 caracteres"
          />

          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            min="0"
            max="120"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />

          <label htmlFor="fecha">Fecha de contacto:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            defaultValue={today}
            readOnly
          />

          <label htmlFor="motivo">Motivo de contacto:</label>
          <select
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          >
            <option value="">--Seleccione--</option>
            <option value="consulta">Consulta</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="reclamo">Reclamo</option>
          </select>

          <label>
            <input
              type="checkbox"
              name="acepto"
              checked={acepto}
              onChange={(e) => setAcepto(e.target.checked)}
              required
            />
            Acepto los términos y condiciones
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Contactenos;
