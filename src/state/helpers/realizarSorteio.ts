import { embaralharLista } from "../../utils/listas";

const realizarSorteio = (participantes: string[]): Map<string, string> => {
  const totalParticipantes = participantes.length;
  const participantesEmbaralhados = embaralharLista(participantes);

  const resultado = participantesEmbaralhados.reduce(
    (acc: Map<string, string>, participante, indice) => {
      const primeiroIndice = 0;
      const ultimoIndice = totalParticipantes - 1;

      const proximoIndice = indice + 1;

      const indiceDoAmigo =
        indice === ultimoIndice ? primeiroIndice : proximoIndice;

      acc.set(participante, participantesEmbaralhados[indiceDoAmigo]);

      return new Map(acc);
    },
    new Map()
  );

  return resultado;
};

export default realizarSorteio;
