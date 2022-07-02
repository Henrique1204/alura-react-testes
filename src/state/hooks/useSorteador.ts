import { useSetRecoilState } from "recoil";

import useListaDeParticipantes from "./useListaDeParticipantes";

import { resultadoAmigoSecreto } from "../atom";
import realizarSorteio from "../helpers/realizarSorteio";

const useSorteador = () => {
  const participantes = useListaDeParticipantes();

  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  const sortear = () => {
    const resultado = realizarSorteio(participantes);

    setResultado(resultado);
  };

  return sortear;
};

export default useSorteador;
