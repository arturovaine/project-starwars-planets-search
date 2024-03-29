# Projeto Starwars Planets Search em context api e hooks!

# Sumário   

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto:](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Lista de requisitos](#lista-de-requisitos)

    `Requisitos obrigatórios:`
    - [1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents](#1---faça-uma-requisição-para-o-endpoint-planets-da-api-de-star-wars-e-preencha-uma-tabela-com-os-dados-retornados-com-exceção-dos-da-coluna-residents)
    - [2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado](#2---filtre-a-tabela-através-de-um-texto-inserido-num-campo-de-texto-exibindo-somente-os-planetas-cujos-nomes-incluam-o-texto-digitado)
    - [3 - Crie um filtro para valores numéricos](#3---crie-um-filtro-para-valores-numéricos)
    - [4 - Não utilize filtros repetidos](#4---não-utilize-filtros-repetidos)
    - [5 - Apague o filtro de valores numéricos e desfaça as filtragens dos dados da tabela ao clicar no ícone de X de um dos filtros](#5---apague-o-filtro-de-valores-numéricos-e-desfaça-as-filtragens-dos-dados-da-tabela-ao-clicar-no-ícone-de-x-de-um-dos-filtros)

    `Requisitos bônus:`
    - [6 - Ordene as colunas de forma ascendente ou descendente](#6---ordene-as-colunas-de-forma-ascendente-ou-descendente)
- [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Nesse projeto, você será capaz de:

* Utilizar a _Context API_ do **React** para gerenciar estado.
* Utilizar o _React Hook useState_;
* Utilizar o _React Hook useContext_;
* Utilizar o _React Hook useEffect_;
* Criar _React Hooks_ customizados.

---

# Entregáveis

## O que deverá ser desenvolvido

Você vai desenvolver uma lista com filtros de planetas do universo de Star Wars usando **Context API e Hooks** para controlar os estados globais.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub no Course sempre que precisar!

---

## Desenvolvimento

---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

## Linter

Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint` e o `Stylelint`. Para rodar o linter localmente no seu projeto, execute o comando abaixo:

```bash
npm run lint
npm run lint:styles
```

⚠ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

---

## Execução de testes unitários

Neste projeto utilizamos a [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Em alguns dos [Requisitos do projeto](#requisitos-do-projeto) será pedido que você coloque o atributo `data-testid` nos elementos HTML. Isso acontece pois a RTL utiliza esse atributo para poder verificar a solução proposta.

Por exemplo, se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`", você poderá criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"><a/>
```

O atributo `data-testid="my-action"` servirá para a React Testing Library identificar o elemento e, dessa forma, será possível realizar os testes unitários focados no comportamento da aplicação.

**Importante:** Em alguns requisitos, utilizamos o método `getByRole` para poder selecionar os elementos de forma semântica. Portanto atente-se às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um button, você deverá utilizar exatamente esse elemento.

Para verificar se seu projeto atende aos requisitos, você pode executar todos os testes unitários localmente, executando o comando:

```bash
npm test
```

### Dica: desativando testes

Para rodar apenas um teste, basta a utilização da função `.only` após o describe. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

![image](describe-only.png)
![image](only-all-green.png)

Caso queira avaliar apenas um tópico do requisito, você também pode usar o `.only` após o `it`.

![image](it-only.png)
![image](only-one-green.png)


# Requisitos do projeto

## Lista de requisitos

### 1 - Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna `residents`

> Observação: Para evitar erros no avaliador, na preparação do seu ambiente de trabalho para o uso do Context API, é necessário que o <Provider> seja usado dentro do componente `App.js` e não no arquivo `index.js`. Esta orientação tem finalidade exclusiva para os testes deste projeto.

A tabela deve ser renderizada por um componente chamado `<Table />`. Os dados recebidos da API devem ser salvos num campo chamado `data` do contexto e é daí que a tabela deve lê-los. A requisição deve ser feita num componente separado do componente da tabela.

A API a ser consultada está [nesse link](https://swapi-trybe.herokuapp.com/api/planets/). Ou seja, você deverá fazer um fetch para a URL `https://swapi-trybe.herokuapp.com/api/planets/`

A tabela deve ter uma primeira linha com os headers e as demais com as informações de cada campo.

O que será verificado:
```
- Realiza uma requisição para a API
- Preenche a tabela com os dados retornados
- Verifica se a tabela tem 13 colunas
- Verifica se a tabela tem uma linha para cada planeta retornado
```

![image](req-1.png)


### 2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado

Ele deve atualizar a tabela com os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter que apertar um botão para efetuar a filtragem. Por exemplo, se digitar "Tatoo", o planeta "Tatooine" deve ser exibido. Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação e o texto digitado deve ser salvo num campo `{ filterByName: { name } }`. Por exemplo:

```javascript
{
  filterByName: {
    name: 'Tatoo'
  }
}
```

O campo de texto deve possuir a propriedade `data-testid='name-filter'` para que a avaliação automatizada funcione.

O que será verificado:
```
- Renderiza o campo de texto para o filtro de nomes
- Filtra os planetas que possuem a letra "o" no nome
- Filtra planetas que possuem a letra "oo" no nome
- Realiza vários filtros em sequência
```

![img](req-2.gif)

### 3 - Crie um filtro para valores numéricos

Ele funcionará com três seletores:

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. Deve ser uma tag `select` com a propriedade `data-testid='column-filter'`;
  - O segundo deve determinar se a faixa de valor será `maior que`, `menor que` ou `igual a` o numero que virá a seguir. Uma tag `select` com a propriedade `data-testid='comparison-filter'`;
  - O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag `input` com a propriedade `data-testid='value-filter'`;
  - Deve haver um botão para acionar o filtro, com a propriedade `data-testid='button-filter'`.

A combinação desses três seletores deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:
  - A seleção `population | maior que | 100000` - Seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` - Seleciona somente planetas com diâmetro menor que 8000.

Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação. No contexto, esses valores devem ser salvos em um outro campo `{ filterByNumericValues: [{ column, comparison, value }] }`. Por exemplo:

```javascript
{
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    }
  ]
}
```

O que será verificado:
```
- Renderiza o filtro de coluna
- Renderiza o filtro de comparação
- Renderiza o campo para o valor do filtro
- Renderiza o botão para executar a filtragem
- Verifica valores iniciais de cada campo
- Filtra utilizando apenas o botão de filtrar
- Filtra utilizando a comparação "menor que"
- Filtra utilizando a comparação "maior que"
- Filtra utilizando a comparação "igual a"
```
![img](req-3.gif)

### 4 - Não utilize filtros repetidos

Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado. Este novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores. Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro. Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação.

Por exemplo: O primeiro filtro tem as seguintes seleções: `population | maior que | 100000`. Um segundo filtro deve aparecer após essas seleções serem todas feitas e, no primeiro dropdown deste segundo filtro, a opção `population` deve estar ausente. Se no segundo filtro fosse selecionado `diameter | menor que | 8000`, o estado ficaria assim:

```javascript
{
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
    {
      column: 'diameter',
      comparison: 'menor que',
      value: '8000',
    }
  ]
}
```

O que será verificado:
```
- Filtra por população e o remove das opções
```

![img](req-4.gif)

### 5 - Apague o filtro de valores numéricos e desfaça as filtragens dos dados da tabela ao clicar no ícone de `X` de um dos filtros

O `button` com o ícone de `x` deve existir em cada filtro de valores numéricos.

A coluna que este filtro selecionava deve passar a ficar disponível nos dropdowns dos demais filtros já presentes na tela. Você deve usar **Context API e Hooks** para fazer o gerenciamento do estado da aplicação. Cada filtro deve possuir a propriedade `data-testid='filter'`, com um `button` em seu interior com o texto `X`.

O que será verificado:
```
- Adiciona um filtro e verifica se a tabela foi atualizada com as informações filtradas, depois remove o filtro e verifica se os valores da tabela voltaram ao original.
- Adiciona dois filtros e verifica se a tabela foi atualizada com as informações filtradas, depois remove os filtros e verifica se os valores da tabela voltaram ao original.
```

![img](req-5.gif)

### Bônus

### 6 - Ordene as colunas de forma ascendente ou descendente

A informação acerca da ordenação das colunas deve ser armazenada em um novo campo `{ order: { column: 'population', sort: 'ASC'} }`, o campo column representa o nome da coluna a ordenar e a ordem representa a ordenação, sendo 'ASC' ascendente e 'DESC' descendente. Por padrão, a tabela começa ordenada por ordem alfabética. Por exemplo:

```javascript
{
  order: {
    column: 'population',
    sort: 'ASC',
  }
}
```

Essa ordenação deve ser feita via filtro: um dropdown selecionará a coluna a basear a ordenação e um par de radio buttons determinará se esta é ascendente ou descendente.

As colunas selecionáveis através deste dropdown são: 'population', 'orbital_period', 'diameter', 'rotation_period' e 'surface_water'.

O dropdown deve ser um elemento `select` com a propriedade `data-testid='column-sort'`, com as opções das colunas escolhíveis em seu interior. Deve haver também, dois `inputs` de tipo `radio`, com propriedades `data-testid='column-sort-input-asc'` e `data-testid='column-sort-input-desc'`, para definir o sentido da ordenação (com `value` sendo `ASC` ou `DESC`) e um botão para submeter a ordenação, com uma tag `button` e a propriedade `data-testid='column-sort-button'`.

Adicione o atributo `data-testid` com o valor `planet-name` em todos os elementos da tabela que possuem o nome de um planeta.

O que será verificado:
```
- Verifica ordenação inicial
- Ordena os planetas do maior período orbital para o menor período orbital
- Ordena os planetas do menor diametro para o maior diametro
- Ordena os planetas do mais populoso para o menos populoso

```
![img](req-6.gif)

---

