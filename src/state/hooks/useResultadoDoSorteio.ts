import { useRecoilValue } from "recoil";

import { resultadoAmigoSecreto } from "../atom";

const useResultadoDoSorteio = (): Map<string, string> => {
  const resultado = useRecoilValue(resultadoAmigoSecreto);

  return resultado;
};

export default useResultadoDoSorteio;
