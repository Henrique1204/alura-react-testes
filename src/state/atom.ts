import { atom } from 'recoil';

export const listaParticipantes = atom<string[]>({
    key: 'listaParticipantes',
    default: [],
});

export const erroState = atom<string>({
    key: 'erroState',
    default: '',
});
