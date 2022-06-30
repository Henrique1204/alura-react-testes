import React from "react";
import { RecoilRoot } from "recoil";

import { render, screen } from "@testing-library/react";

import ListaParticipantes from "./ListaParticipantes";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes");

describe("Uma lista vazia de participantes..", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Deve ser renderizada sem elementos.", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(0);
  });
});

describe("Uma lista preenchida de participantes..", () => {
  const participantesMock = ['Paulo', 'Henrique'];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantesMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Deve ser renderizada sem elementos.", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(participantesMock.length);
  });
});
