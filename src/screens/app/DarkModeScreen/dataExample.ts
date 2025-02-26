export type Batata = {
  id: string;
  especie: string;
  cor?: string;
};

export const batatas: Batata[] = [
  {
    id: '1',
    especie: 'Batata doce',
    cor: 'laranja',
  },
  {
    id: '2',
    especie: 'Batata inglesa',
  },
  {
    id: '3',
    especie: 'Batata baroa',
    cor: 'amarela',
  },
];

export type Pessoa = {
  cpf: string;
  nome: string;
  idade: number;
  contanto?: {
    email: string;
    telefone: string;
  };
};

export const pessoas: Pessoa[] = [
  {
    cpf: '12345678901',
    nome: 'João',
    idade: 25,
    contanto: {
      email: 'joao@gmail.com',
      telefone: '123456789',
    },
  },

  {
    cpf: '98765432109',
    nome: 'Maria',
    idade: 30,
    contanto: {
      email: 'maria@gmail.com',
      telefone: '987654321',
    },
  },
];
