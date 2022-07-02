import React from "react";
import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";

const Sorteio: React.FC = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {participantes.map((participante, key) => (
            <option key={`${participante.replace(/ /g, "-")}-${key}`}>
              {participante}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Sorteio;
