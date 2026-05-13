function Ganador({ ganador }) {
  if (ganador === null) {
    return <h2>Aún no hay ganador</h2>;
  }
  if (ganador.empate) {
    return <h2>Empate entre: {ganador.nombres.join(", ")} con {ganador.votos} votos.</h2>;
  }
  return (
    <div className="winner-box">
      <h2>Ganador de la elección</h2>
      <p>
        Ganó {ganador.nombre} con {ganador.votos} votos.
      </p>
    </div>
  );
}

export default Ganador;