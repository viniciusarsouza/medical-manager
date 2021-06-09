### Scripts do package.json

| Comando    | Descrição                     | Quem usa      |
| ---------- | ----------------------------- | ------------- |
| dev:server | inicia o ts-node-dev          | desenvolvedor |
| build      | gera os arquivos transpilados | desenvolvedor |
| test       | roda os testes unitários      | desenvolvedor |

### Sistema de pastas

-   Src: source da api
    *modules
    *doctors
    *dtos: interface que define os atributos de um médico
    *infra
    *http: possui a parte de controle das definições de rotas com os controllers, endpoint com as routes do enpoint especificas do modulo
    *typeorm: possui as entidades, que definem como os medicos integram no bando de dados. Possui os repositorios, camada responsável por acesso ao banco, nenhum lógica de negocio.
    *repositories: define quais serão as funções presentes no repositorio, e o repositorio usado para testes
    *services: camada responsável pela lógica de nogocio.
    *shared: tudo que pode ser utilizado em toda a aplicação
    *container: possui os providers, que podem se tratar de apis externas ou não, e define as injeções de dependencia da aplicação
    _errors: permite o desenvolvedor definir como serão apresentados os erros
    _
    *infra
    *http: uma segunda camada de endpoints mais geral que trabalha diretamente com o express
    \*typeorm: possui as migrations, que criam as tabelas na base de dados, local onde podem ser definidas as seeds

### Premissas e Responsábilidades

-   Serviços:
    -   São responsáveis pelo negócio.
    -   Devem ser ter teste unitários
    -   Podem utilizar outros serviços
    -   Devem ter uma única responsábilidade, focada em um segmento (ex. doctor) ou funcionalidade
    -   Utilizam os repositórios para acessar os dados do banco.
    -   Recebem o dado completo e validado.
    -   Se algum requisito não for suprido lance um ServiceError com os detalhes, pois isso é culpa de quem o utiliza
-   Repositórios:
    -   São responsáveis pelo acesso ao banco
    -   Não devem conter lógica de negócio apenas lógica de banco.
    -   Devem ter uma única responsábilidade, focada em uma tabela ou funcionalidade
    -   Um repositório não devem chamar outro.
-   Controllers:
    -   Definem quem pode acessar atráves das roles/middlewares
    -   Devem validar o dado para passar para os serviços
    -   Não devem conter lógica de negócio
    -   Podem acessar diretamente os serviços para efetuar alguma alteração ou os respositorios para leitura.
    -   Não deve tratar erros genéricos, apenas erros especificos e esperados, os genéricos devem ser passados para o próximo handle de errors (via next function)
    -   Podem formatar os dados antes de retornar.
-   Módulos:
    -   Focados em uma área do projeto (doctors, addresses, etc...)
    -   Tem seus próprios serviços, repositorios, controllers e etc...
    -   Não devem utilizar nada de outro modulo, a não ser dos módulo compartilhados (shared, providers e etc).
