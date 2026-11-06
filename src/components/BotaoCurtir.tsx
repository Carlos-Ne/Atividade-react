// Definição estrita da interface das props (proibido o uso de 'any')
interface BotaoCurtirProps {
  textoBotao: string;
  aoClicar: () => void;
}

export function BotaoCurtir({ textoBotao, aoClicar }: BotaoCurtirProps) {
  return (
    <button 
      onClick={aoClicar}
      style={{ padding: '10px 20px', cursor: 'pointer', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
    >
      {textoBotao} 🚀
    </button>
  );
}