# Medical Manager

<p align="center">Este projeto foi criado buscando mostrar os conhecimentos, boas
práticas de desenvolvimento e modelagem. Com tema proposto um gerenciador de médicos, Medical Manager, que possibilita cadastro e manutenção de médicos com seus dados. Definições da arquitetura presente na pasta docs.</p>

### Pré-requisitos

---

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/).
[Docker](https://www.docker.com/).

### Rodando o Back End (servidor)

```bash
# Utilizando o terminal crie uma imagem docker para conectar ao bando de dados postgres
$ sudo docker run --name medical_manager_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Iinicie a imagem docker com
$ sudo docker start medical_manager_postgres

# Acesse a pasta do projeto no terminal/cmd
$ cd medical-manager-server

# Instale as dependências
$ yarn

# Execute as migrations para criar as tabelas do banco de dados

$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333
```

### Utilizando aplicação (Insomnia)

```bash
    Workspace contendo todos os requests da aplicação está presente na pasta medical-manager-server no formato .json
    Basta importar o arquivo dentro no Insomnia.
```

### Rodando testes (Jest)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd medical-manager-server

# Inicie os testes
$ yarn test

```

### Tecnologias

---

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Insomnia](https://insomnia.rest/)

### Autor

---

Feito por Vinícius Adriano.

LikedIn: https://www.linkedin.com/in/vinicius-adriano-26a74713b/<br />
GitHub: https://github.com/viniciusarsouza
