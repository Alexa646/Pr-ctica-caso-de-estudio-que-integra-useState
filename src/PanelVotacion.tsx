function PanelVotacion({ candidatos, generarVotos }) {
  return (
    <div>
      <h2>Candidatos</h2>

      <ul>
        {candidatos.map((candidato) => (
          <li key={candidato.id}>
            Vota con {candidato.id}: {candidato.nombre}
          </li>
        ))}
      </ul>

      <button onClick={generarVotos}>
        Generar 500 votos aleatorios
      </button>
    </div>
  );
}

export default PanelVotacion;