import React from "react";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";
import useResultadoDoSorteio from "../state/hooks/useResultadoDoSorteio";

const Sorteio: React.FC = () => {
  const [participanteDaVez, setParticipanteDaVez] = React.useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = React.useState<string>("");

  const participantes = useListaDeParticipantes();
  const resultadoSorteio = useResultadoDoSorteio();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const amigoSecreto = resultadoSorteio.get(participanteDaVez);

    if (!amigoSecreto) return;

    setAmigoSecreto(amigoSecreto);

    setTimeout(() => setAmigoSecreto(""), 5000);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <select
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={({ target }) => setParticipanteDaVez(target.value)}
          required
        >
          {participantes.map((participante, key) => (
            <option
              value={participante}
              key={`${participante.replace(/ /g, "-")}-${key}`}
            >
              {participante}
            </option>
          ))}
        </select>

        <button>Sortear</button>
      </form>

      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};

export default Sorteio;
