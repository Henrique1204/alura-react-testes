import { useSetRecoilState } from "recoil";

import useListaDeParticipantes from "./useListaDeParticipantes";

import { resultadoAmigoSecreto } from "../atom";

import { embaralharLista } from "../../utils/listas";

const useSorteador = () => {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  const sortear = () => {
    const totalParticipantes = participantes.length;
    const participantesEmbaralhados = embaralharLista(participantes);

    const resultado = participantesEmbaralhados.reduce(
      (acc: Map<string, string>, participante, indice, participantes) => {
        const primeiroIndice = 0;
        const ultimoIndice = totalParticipantes - 1;

        const proximoIndice = indice + 1;

        const indiceDoAmigo =
          indice === ultimoIndice ? primeiroIndice : proximoIndice;

        acc.set(participante, participantes[indiceDoAmigo]);

        return new Map(acc);
      },
      new Map()
    );

    setResultado(resultado);
  };

  return sortear;
};

export default useSorteador;
