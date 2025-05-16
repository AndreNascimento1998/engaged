# RickeMorty - Consumir uma api em GraphQL

RickeMorty é um projeto que exibe uma lista de cards dos personagens da série. É possível filtrar os personagens pelo nome para facilitar a busca por alguém específico. Ao clicar em um card, são exibidas informações detalhadas sobre o personagem, incluindo os episódios em que ele aparece. Cada episódio possui um ícone que redireciona o usuário para uma página externa na Wikipédia com mais informações sobre o episódio selecionado.

### 🖥️ Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo para a construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para projetos web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de utilitários para estilização rápida e responsiva de interfaces.
- **GraphQL**:Linguagem de consulta para APIs que permite buscar apenas os dados necessários.
- **Quasar**: Framework baseado em Vue para criação de aplicações responsivas e com visual moderno, inclusive apps mobile e desktop.

#### 🗂️ Estrutura do Projeto

    ├── components          # Componentes de interface
        ├── base            # Componentes Genéricos
        ├── Icons            # Componentes de Ícones
        └── pages           # Componentes de Páginas
    ├── router              # Configuração de rotas
    ├── stores              # Configuração de estados globais
    ├── lib                 # Serviços de comunicação com a API GraphQL
    └── views               # Páginas da aplicação

### ⚙️ Funcionalidades

- **Listagem de personagem**: Realiza uma busca em uma API GraphQL para retornar todos os personagens da série.
- **Filtragem**: É possível filtrar os personagens pelo nome.
- **Informações detalhadas do personagem**: Ao clicar em um card, o usuário é redirecionado para uma página com mais detalhes sobre o personagem, incluindo os episódios em que ele aparece.
- **Informação do espisódio**: Ao clicar no ícone de episódio, o usuário é levado ao Wikipédia com a descrição completa daquele episódio.
- **Interface animada e responsiva**: A interface é limpa, responsiva e conta com animações que suavizam a interação do usuário.

### ☁️ Hospedagem

O projeto está hospedado no Vercel, garantindo alta disponibilidade e desempenho.<br>
E pode ser acessado através do link: [https://rickemorty.vercel.app/](https://rickemorty.vercel.app/).

### 🚀 Como Executar o Projeto

1. No terminal clone o repositório.

```bash
$ git clone git@github.com:AndreNascimento1998/engaged.git
```

2. Ativando as variáveis de ambiente. Acesse a raiz do projeto e renomeie o arquivo `.env-example` para `.env`. Esse arquivo contém as variáveis de ambiente necessárias para a aplicação funcionar corretamente.

3. No terminal instale as dependências do projeto.

```bash
$ npm install
```

4. No terminal execute o projeto.

```bash
$ npm run dev
```

### 📚 Decisões de Projeto

- **Vue 3 + composition API**: Utilização do Vue 3 e Composition API para facilitar a criação de componentes reutilizáveis e a manutenção do código.
- **Vite**: Ferramenta de build rápida e moderna para projetos web.
- **Typescript**: Utilização de Typescript para garantir tipagem estática e facilitar a manutenção do código.
- **GraphQL + Apollo Client**: Comunicação eficiente com a API através do GraphQL, utilizando o Apollo Client para realizar queries e mutations de forma reativa e escalável.
- **Tailwind CSS**: Framework utilitário de CSS que permite a construção de interfaces modernas e responsivas com classes semânticas e altamente customizáveis.
- **Quasar**: Biblioteca de componentes UI baseada em Vue que oferece uma experiência rica em dispositivos desktop e mobile, com suporte a temas, animações e muito mais.
- **Responsividade**: Utilização de Grid Layout, Flexbox e componentes do Element-Plus para garantir uma interface responsiva.
- **Arquitetura**: A arquitetura atual foi escolhida para organizar o código de forma clara e eficiente. As `views` contêm o `index` do arquivo, servindo como ponto de entrada para as páginas. As `pages` são usadas para abstrair a lógica, mantendo o código mais limpo e organizado. A pasta `base` é destinada à criação de componentes genéricos reutilizáveis.
