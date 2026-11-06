import { useState } from 'react';

export function App() {
  // Estado para controlar o número de curtidas (useState com valor inicial 0)
  const [curtidas, setCurtidas] = useState<number>(0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Perfil do Aluno — Ticket 01</h2>
      <p>Curtidas recebidas: <strong>{curtidas}</strong></p>
      
      {/* Botão com evento onClick para incrementar o estado */}
      <button 
        onClick={() => setCurtidas(curtidas + 1)}
        style={{ padding: '10px 20px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Curtir 👍
      </button>

      {/* Renderização condicional: exibe apenas quando curtidas forem estritamente maiores que 5 */}
      {curtidas > 5 && (
        <h3 style={{ color: '#ff4500', marginTop: '20px' }}>TECINFO 2026 🔥</h3>
      )}
    </div>
  );
}

export default App;