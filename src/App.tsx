import { useState } from 'react';
import { BotaoCurtir } from './components/BotaoCurtir';

// Interface para os itens da lista dinâmica (Ticket 03)
interface ItemTopico {
  id: number;
  texto: string;
}

export function App() {
  // Estado para o espelhamento de texto do input
  const [textoInput, setTextoInput] = useState<string>('');

  // Estado para o contador de curtidas
  const [curtidas, setCurtidas] = useState<number>(0);

  const incrementarCurtidas = () => {
    setCurtidas(curtidas + 1);
  };

  // Lista dinâmica utilizando a prop key única
  const topicos: ItemTopico[] = [
    { id: 1, texto: 'React com Vite e TypeScript' },
    { id: 2, texto: 'Componentização e Props Tipadas' },
    { id: 3, texto: 'Elevação de Estado (Lifting State Up)' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Cabeçalho */}
      <header style={{ marginBottom: '25px', borderBottom: '2px solid #eaeaea', paddingBottom: '10px' }}>
        <h1 style={{ color: '#333' }}>Painel de Controle — TecInfo 2026</h1>
      </header>

      {/* Espelhamento de Texto */}
      <section style={{ marginBottom: '25px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h3>1. Espelhamento de Texto em Tempo Real</h3>
        <input 
          type="text" 
          placeholder="Escreve alguma coisa aqui..." 
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          style={{ padding: '8px', width: '100%', boxSizing: 'border-box', marginTop: '8px' }}
        />
        <div style={{ marginTop: '10px', background: '#fff', padding: '10px', border: '1px solid #ddd' }}>
          <strong>Cartão Oposto:</strong> {textoInput || 'Aguardando digitação...'}
        </div>
      </section>

      {/* Contador e Destaque */}
      <section style={{ marginBottom: '25px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h3>2. Contador e Reatividade</h3>
        <p>Curtidas recebidas: <strong>{curtidas}</strong></p>

        <BotaoCurtir textoBotao="Curtir via Props" aoClicar={incrementarCurtidas} />

        {/* Renderização condicional: aparece apenas quando curtidas > 5 */}
        {curtidas > 5 && (
          <h3 style={{ color: '#ff4500', marginTop: '12px' }}>TECINFO 2026 🔥</h3>
        )}
      </section>

      {/* Listas Dinâmicas */}
      <section style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h3>3. Tópicos do Módulo (Listas Dinâmicas)</h3>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          {topicos.map((topico) => (
            <li key={topico.id} style={{ marginBottom: '5px' }}>{topico.texto}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;