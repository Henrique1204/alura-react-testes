import { gerarNumeroAleatorio } from "./numeros";

export const embaralharLista = <T = any>(lista: T[]): T[] => {
  const totalLista = lista.length;

  const indexGerados: number[] = [];
  const listaEmbaralhada: T[] = [];

  while (indexGerados.length !== totalLista) {
    const index = gerarNumeroAleatorio(0, totalLista);

    if (indexGerados.includes(index)) continue;

    indexGerados.push(index);
    listaEmbaralhada.push(lista[index]);
  }

  return listaEmbaralhada;
};
