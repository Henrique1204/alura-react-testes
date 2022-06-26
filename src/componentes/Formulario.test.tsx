import React from 'react';
import { render, screen } from '@testing-library/react';

import Formulario from './Formulario';

test('Quando o input está vazio, novos participantes não podem ser adicionados.', () => {
    render(<Formulario />);

    const input = screen.getByPlaceholderText('Insira os nomes dos participante');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
});
