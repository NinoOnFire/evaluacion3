import Header from "./Header";
import './Components.css';

function Nosotros() {
  return (
    <>
      <Header />
      <div className="nosotros-container">
        <h1>Sobre Nosotros</h1>
        <p>
          En <strong>GameVerse</strong> vivimos y respiramos videojuegos. Somos una comunidad creada por jugadores, para jugadores.
          Nuestro objetivo es compartir, descubrir y celebrar todo lo que hace que los videojuegos sean una experiencia inolvidable.
        </p>
        <p>
          Desde clásicos retro hasta los últimos lanzamientos, en nuestra plataforma encontrarás noticias, reseñas, recomendaciones y más.
        </p>
        <p>
          Únete a la aventura y forma parte de un mundo donde cada partida cuenta. ¡Nos vemos en el juego!
        </p>
      </div>
    </>
  );
}

export default Nosotros;

