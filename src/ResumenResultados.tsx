function ResumenResultados({ candidatos, resultados }) {
  const totalVotos = Object.values(resultados).reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="container">
      <h2>Resultados</h2>

      {candidatos.map((candidato) => {
        const votosCandidato = resultados[candidato.id];
        const porcentaje = totalVotos > 0
        ? ((votosCandidato / totalVotos) * 100).toFixed(1)
        : "0.0";
        return(
        <div key={candidato.id} className="result-item">
          <span>{candidato.nombre}: </span>
          <strong>{resultados[candidato.id]}</strong> votos ({porcentaje}%)
        </div>
        );
})}
    </div>
  );
}

export default ResumenResultados;