export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span onClick={resetCharacters} className="back-home">
        Volver al Home
      </span>
      <div className="container-characters">
        {characters.map(
          (character, index) =>
            // Validación simple: solo renderiza si 'character' no es null
            character && (
              <div className="character-container" key={index}>
                <div>
                  <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3>{character.name}</h3>
                  <h6>
                    {character.status === "Alive" ? (
                      <>
                        <span className="alive"> Vivo</span>
                      </>
                    ) : character.status === "Dead" ? (
                      <>
                        {" "}
                        <span className="dead"> Muerto</span>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="unknown">
                          Desconocido
                        </span>{" "}
                      </>
                    )}
                  </h6>
                  <p>
                    {/* Uso de optional chaining para evitar errores si episode no existe */}
                    <span className="text-grey">Episodios: </span>
                    <span>{character.episode?.length || 0}</span> episodios
                  </p>
                  <p>
                    <span className="text-grey">Especie: </span>
                    <span>{character.species}</span>
                  </p>
                </div>
              </div>
            ),
        )}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Volver al Home para buscar más personajes
      </span>
    </div>
  );
}