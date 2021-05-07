# Desafio Software Engineer
Dashboard para comparação de interesse em algumas comidas por todo o mundo.

# ✋🏻 Pré-requisitos
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)


## Features
Para o desenvolvimento do projeto foi utilizada uma stack com as seguintes tecnologias:

- 💹 **Node Js** — Web framework que permite utilizar javascript tanto no frontend quanto no backend;
- :virgo: **Vue Js** — Framework Javascript para construção de interfaces;
- 🛢️ **Knex** — Builder de SQL Query para Javascript

## 🚀  Tecnologias
Backend:
-   [Node.js](https://nodejs.org/en/)
-   [Knexjs](http://knexjs.org/)
-   [Express](https://expressjs.com/pt-br/)
-   [Knex](http://knexjs.org/)
-   [TS-node](https://www.npmjs.com/package/ts-node)
-   [TypeScript](https://www.typescriptlang.org/)

Frontend:
-   [Vuejs](https://vuejs.org/)
-   [Axios](https://github.com/axios/axios)
-   [Vue Router](https://router.vuejs.org/)
-   [Chartjs](https://www.chartjs.org/)
-   [Highcharts](https://www.highcharts.com/)
-   [Vuetifyjs](https://vuetifyjs.com/en/)

##  Instalação e execução



###  Utilizando docker-compose através de um script bash 
Clone o projeto em seu computador. Para instalar as dependências e executar o **Servidor** (modo desenvolvimento) execute:
```bash
cd software-engineer-challenge

 ./rundockerized.sh
```

### Base de dados - verificar a importação do dump SQL
Executando o script bash 'rundockerized.sh' será  criado e importado o banco de dados juntamente com o backend e o frontend da aplicação:


Se já tiverem a base dados criada, basta configurar o arquivo de conexão na pasta /backend/src/database/connection.ts;


### Instalação - Backend (manualmente sem a utilizaçao do docker)
Clone o projeto em seu computador. Para instalar as dependências e executar o **Servidor** (modo desenvolvimento) execute:
```bash
cd backend
yarn install
yarn dev:server
```

### Instalação - Frontend (WEB) (manualmente sem a utilizaçao do docker)
Para iniciar o **Frontend** do Vue utilize os comandos:
```bash
cd frontend
yarn install
yarn serve
```

apiBackend: `localhost:3333`

apiFrontend: `localhost:8088`



Assim que o processo terminar abra o navegador e acesse o endereço `localhost:8080` contendo o Projeto desenvolvido.
