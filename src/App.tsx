import { useState, useEffect } from "react";
import PanelVotacion from "./PanelVotacion";
import ResumenResultados from "./ResumenResultados";
import Ganador from "./Ganador";

function App() {
  const candidatos = [
    { id: 1, nombre: "Ana López" },
    { id: 2, nombre: "Carlos Méndez" },
    { id: 3, nombre: "María Torres" }
  ];

  const [votos, setVotos] = useState<number[]>([]);
  const [resultados, setResultados] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0
  });

  const [ganador, setGanador] = useState<any>(null);

  function generarVotos() {
    const nuevosVotos: number[] = [];
    for (let i = 1; i <= 500; i++) {
      const votoAleatorio = Math.floor(Math.random() * 3) + 1;
      nuevosVotos.push(votoAleatorio);
    }
    setVotos(nuevosVotos); 
  }

  useEffect(() => {
    if (votos.length === 500) {
      const conteo = { 1: 0, 2: 0, 3: 0 };
      votos.forEach((voto) => {
        conteo[voto as keyof typeof conteo]++;
      });
      setResultados(conteo);
    }
  }, [votos]);

  useEffect(() => {
    const valoresVotos = Object.values(resultados);
    const sumaTotal = valoresVotos.reduce((a, b) => a + b, 0);

    if (sumaTotal === 0) return;

    const maxVotos = Math.max(...valoresVotos);
    const ganadoresPotenciales = candidatos.filter(c => resultados[c.id] === maxVotos);

    if (ganadoresPotenciales.length > 1) {
      setGanador({ 
        empate: true, 
        nombres: ganadoresPotenciales.map(g => g.nombre), 
        votos: maxVotos 
      });
    } else {
      setGanador({ 
        ...ganadoresPotenciales[0], 
        votos: maxVotos, 
        empate: false 
      });
    }
  }, [resultados]);

  return (
    <div className="container">
      <h1>Elección Municipal</h1>

      <PanelVotacion 
        candidatos={candidatos}
        generarVotos={generarVotos}
      />

      <ResumenResultados 
        candidatos={candidatos}
        resultados={resultados}
      />

      <Ganador ganador={ganador} />
    </div>
  );
}

export default App;