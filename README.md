# Projeto-Interface-Usuario
Repositório para a matéria Projeto de Interface de Usuário lecionada pelo professor Pedro Iuri Soares de Souza

# ReactJs
Repositório de estudo de ReactJS

## Material de estudo:
Tutorial Felipe Rocha: https://www.youtube.com/watch?v=2RWsLmu8yVc

# Iniciando um projeto:

## No terminal:
- npm create vite (@latest)
- cd (nome inserido na configuração)
- npm install
- npm run dev

# Funções:

## Map (for)
``` jsx
    //temp = variavel temporária
    {array.map((temp) => (temp.nome, temp.valor)) }
```

## Filter
``` jsx
    //retornará apenas os elementos do array que satisfazem a condição
    {array.filter((retorno_temp) => retorno_temp.atributo == condição).map((temp) => (<span> temp.nome </span>))}
```