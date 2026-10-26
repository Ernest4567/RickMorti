import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // La API de Rick and Morty trae 20 personajes por página automáticamente
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      });
  }, [page]); // Al cambiar 'page', el useEffect vuelve a ejecutar el fetch

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Rick and Morty Characters</h1>
      
      {/* Controles de paginación */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0' }}>
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
          style={{ padding: '8px 16px', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
        >
          Anterior
        </button>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Página {page} de {totalPages}
        </span>
        <button 
          disabled={page === totalPages} 
          onClick={() => setPage(page + 1)}
          style={{ padding: '8px 16px', cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Siguiente
        </button>
      </div>

      {/* Grilla de personajes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {characters.map((char) => (
          <div key={char.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '50%' }} />
            <h3>{char.name}</h3>
            <p>Estado: {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;