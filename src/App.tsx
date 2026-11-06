import { useState } from 'react';
import { BotaoCurtir } from './components/BotaoCurtir';

export function App() {
  const [curtidas, setCurtidas] = useState<number>(0);

  const incrementarCurtidas = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Painel Modular — Ticket 02</h2>
      <p>Curtidas recebidas: <strong>{curtidas}</strong></p>
      
      {/* Utilização do componente filho passando props e callbacks */}
      <BotaoCurtir textoBotao="Curtir via Props" aoClicar={incrementarCurtidas} />

      {curtidas > 5 && (
        <h3 style={{ color: '#ff4500', marginTop: '20px' }}>TECINFO 2026 🔥</h3>
      )}
    </div>
  );
}

export default App;