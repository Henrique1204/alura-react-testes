import React from "react";
import { RecoilRoot } from "recoil";

import { render } from "@testing-library/react";

import Configuracao from "./Configuracoes";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("A pagina de configuração", () => {
  it("Deve ser renderizado corretamente.", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
