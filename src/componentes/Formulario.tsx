import React from 'react';

const Formulario: React.FC = () => {
    return (
        <form>
            <input placeholder='Insira os nomes dos participante' />
            <button type="button" disabled={true}>Adicionar</button>
        </form>
    );
};

export default Formulario;
