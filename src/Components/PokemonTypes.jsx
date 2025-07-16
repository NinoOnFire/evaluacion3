import React, { useEffect, useState } from "react";
import Header from "./Header";
import './Components.css';

// Componente principal
function PokemonTypes() {
  // Estado para guardar todos los pokemones cargados
  const [pokemons, setPokemons] = useState([]);
  // Estado para saber qué tipo está seleccionado (por defecto "all")
  const [tipoSeleccionado, setTipoSeleccionado] = useState("all");

  // Función asincrónica que obtiene los datos de los pokemones
  const getPokemons = async () => {
    try {
      // Llama a la API principal para obtener los primeros 150 pokemones
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
      const data = await response.json();

      // Mapea cada resultado para obtener más detalles de cada pokemon
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );

      // Espera a que todas las promesas se resuelvan
      const results = await Promise.all(promises);

      // Guarda los resultados en el estado
      setPokemons(results);
    } catch (error) {
      console.error("Error al cargar pokemons:", error);
    }
  };

  // useEffect se ejecuta una sola vez cuando el componente se monta
  useEffect(() => {
    getPokemons(); 
  }, []);

  // Lista de tipos de pokemones para los botones de filtro
  const tipos = [
    "all", "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground",
    "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  // Función que cambia el tipo seleccionado
  const filtrarPorTipo = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  // Si el tipo es "all", se muestran todos. Si no, se filtran por tipo
  const pokemonsFiltrados =
    tipoSeleccionado === "all"
      ? pokemons
      : pokemons.filter((p) =>
          p.types.some((t) => t.type.name === tipoSeleccionado)
        );

  return (
    <div className="pokedex">
      {}
      <Header />

      {}
      <h1 className="h1-pokedex"> Pokedex </h1>
      
      {}
      <section className="pokedex-container">
        <nav className="pokedex-btn-types">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              className={`pokedex-btn pokedex-btn-${tipo}`}
              onClick={() => filtrarPorTipo(tipo)} 
            >
              {tipo === "all" ? "Ver todos" : tipo.charAt(0).toUpperCase() + tipo.slice(1)}
              {}
            </button>
          ))}
        </nav>
      </section>

      {}
      <main className="pokedex-grid">
        {pokemonsFiltrados.map((pokemon) => (
          <div className="pokedex-card" key={pokemon.id}>
            <img
              loading="lazy" 
              className="pokedex-img"
              src={pokemon.sprites.front_default} 
              alt={pokemon.name}
            />
            <h2 className="pokedex-title">{pokemon.name}</h2>
            <div className="pokedex-types">
              {}
              {pokemon.types.map((t) => (
                <span key={t.slot} className={`pokedex-badge type-${t.type.name}`}>
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}


export default PokemonTypes;
