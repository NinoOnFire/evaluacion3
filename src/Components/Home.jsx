import Header from "./Header";
import './Components.css';
import eldenring from '../imagenes/eldenring.jpg';
import balatro from '../imagenes/balatro.jpg';
import valorant from '../imagenes/valorant.jpg';
import ThemeToggle from './Modo'

function Home() {
  // Constante que almacena las imagenes
  const juegos = [
    {
      nombre: "Elden Ring",
      imagen: eldenring
    },
    {
      nombre: "Balatro",
      imagen: balatro
    },
    {
      nombre: "Valorant",
      imagen: valorant
    }
  ];
  

  return (
    <>
      <Header />
      <main className="home-container">
        <section className="hero">
          <h1>🎮 Bienvenido al Mundo Gamer</h1>
          <p>Descubre mundos, desafíos y leyendas. ¡Juega, comenta y conquista.!</p>
          <button>Explorar juegos</button>
        </section>

        <section>
          <ThemeToggle></ThemeToggle>
        </section>

        <section className="destacados">
          <h2>🔥 Juegos Destacados</h2>
          <div className="juegos-grid">
            {juegos.map((juego, index) => (
              <div className="juego-card" key={index}>
                <img src={juego.imagen} alt={juego.nombre} />
                <h3>{juego.nombre}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="noticias">
          <h2>🗞️ Noticias Gamer</h2>
          <ul>
            <li>Nueva expansión de *Battle Raid* disponible.</li>
            <li>El torneo mundial arranca este fin de semana.</li>
            <li>Rumores sobre la consola OmegaX.</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
