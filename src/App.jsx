import React from 'react';

function App() {
  const handleClick = () => {
    const fraseElement = document.getElementById('frase');
    fraseElement.innerText = 'Vai, Corinthians!';
  };

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <button onClick={handleClick}>Clique aqui</button>
      <p id="frase" style={{ textAlign: 'center', marginBottom: '20px' }}></p>
      <div style={{ position: 'absolute', bottom: '0', marginBottom: '10px' }}>
        <h1 style={{ color: '#555' }}>Primeira prática realizada com React</h1>
        <p>Feito por Alef Moreira em 18/12/2023</p>
      </div>
    </div>
  );
}

export default App;
