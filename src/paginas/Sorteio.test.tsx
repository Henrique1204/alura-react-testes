import React from "react";
import { RecoilRoot } from "recoil";

import { render, screen } from "@testing-library/react";

import Sorteio from "./Sorteio";

import useListaDeParticipantes from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes");

describe("Na página de sorteio", () => {
  const participantes = ["Paulo", "Henrique", "Silva", "Souza"];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  it("Todos os particpantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantes.length);
  });
});
