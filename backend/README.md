### Saudações.

<p align="center">
    <img src="https://img.shields.io/github/languages/count/desafio-sharenergy-2023-01?color=%2304D361" alt="Languages" />
    <img src="https://img.shields.io/github/repo-size/Felipe-Holanda/desafio-sharenergy-2023-01" alt="Repo size" />
    <img src="https://img.shields.io/github/last-commit/Felipe-Holanda/desafio-sharenergy-2023-01" alt="Last commit" />
    <img src="https://img.shields.io/github/license/Felipe-Holanda/desafio-sharenergy-2023-01" alt="License" />
</p>

Olá, seja bem vindo ao repositório desta API.
Trata-se de uma API Restfull que contem um CRUD de usuários, desenvolvida para o desafio da empresa [Sharenergy](https://www.sharenergy.com.br/).

Para mais informações sobre o desafio, acesse o [AQUI](https://github.com/SHARENERGY-OFICIAL/desafio-sharenergy-2023-01)!

### Sumário

1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Como usar](#como-usar)
4. [Conteúdo](#conteúdo)
5. [Documentação](#documentação)

# Introdução

Esta API foi desenvolvida em NodeJS, utilizando o framework ExpressJS, e o banco de dados MongoDB.
Na observância dos princípios REST, a API foi desenvolvida para ser escalável, e para que possa ser utilizada por qualquer aplicação que deseje consumir seus dados. Outro ponto que gostaria de abordar é que optei por utilizar o Atlas (DBaaS) já que o mercado ultimamente tem utilizado mais serviços de Cloud Computing, e acredito que isso é um ponto positivo para o desenvolvimento desta API.

## Bibliotecas utilizadas:

- [ExpressJS](https://expressjs.com/pt-br/) - Framework para desenvolvimento de APIs em NodeJS.
- [Mongoose](https://mongoosejs.com/) - Biblioteca para conexão com o MongoDB. (ODM)
- [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para carregamento de variáveis de ambiente.

## Ferramentas utilizadas:

- [Insomnia](https://insomnia.rest/) - Ferramenta para testes de requisições HTTP.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Banco de dados MongoDB em nuvem.
- [AWS EC2](https://aws.amazon.com/pt/ec2/) - Servidor virtual para hospedagem da API.
- [PM2](https://pm2.keymetrics.io/) - Gerenciador de processos para NodeJS (Process Manager).

# Instalação

Para instalar esta API e a executar em sua máquina, você precisará ter instalado em sua máquina o [NodeJS](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/), além do Git para clonar o repositório. Caso não tenha, basta seguir os passos abaixo:

## Instalando o NodeJS e o NPM

Para instalar o NodeJS e o NPM, basta acessar o site oficial do [NodeJS](https://nodejs.org/en/) e baixar o instalador para o seu sistema operacional. Após a instalação, você poderá verificar se o NodeJS e o NPM foram instalados corretamente, digitando os seguintes comandos no terminal:

`node -v`

`npm -v`

## Instalando o Git

Para instalar o Git, basta acessar o site oficial do [Git](https://git-scm.com/) e baixar o instalador para o seu sistema operacional. Após a instalação, você poderá verificar se o Git foi instalado corretamente, digitando o seguinte comando no terminal:

`git --version`

## Clonando o repositório

Para clonar o repositório, basta digitar o seguinte comando no terminal/Git Bash:

`git clone https://github.com/Felipe-Holanda/desafio-sharenergy-2023-01.git desafio-felipe-holanda`

## Instalando as dependências

Para instalar as dependências, basta digitar o seguinte comando no terminal/Git Bash:

`npm install`

Se preferir o Yarn, basta digitar o seguinte comando no terminal/Git Bash:

`yarn install`

# Como usar

Para executar a API, você precisa transpilar o código TypeScript para JavaScript, e para isso, basta digitar o seguinte comando no terminal/Git Bash:

`npm build` ou `yarn build`

Após a transpilação, basta digitar o seguinte comando no terminal/Git Bash:

`npm start` ou `yarn start`

# Conteúdo

Em suma, a API contém um CRUD de usuários, com as seguintes rotas:

| Método | Rota | Descrição |
|--|--|--|
| POST | /login | Gera um Token de autorização.
| GET | /users | Retorna os dados do usuário autenticado
| PATCH | /users | Edita os dados do usuário autenticado
| DELETE | /users | Realiza um "SoftDelete" do usuário autenticado|
| POST | /users | Cria um novo usuário.

# Documentação

Para mais informações sobre a API, acesse a [documentação](https://sharetest-api.000webhostapp.com/).

### Considerações finais.

Agradeço a oportunidade de participar deste processo seletivo, e espero que gostem do meu trabalho.