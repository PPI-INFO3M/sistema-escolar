# Sistema Escolar — Alunos e Professores

Sistema de cadastro com **CRUD de alunos e de professores** (listar, cadastrar e excluir), feito em React + Vite e consumindo uma API simulada com json-server.

Projeto da disciplina de Programação para Internet — IFRN Campus Pau dos Ferros.

## Funcionalidades

- **Alunos:** listagem, cadastro e exclusão.
- **Professores:** listagem, cadastro e exclusão.
- Navegação entre páginas sem recarregar (React Router).
- Mensagem de erro caso a API esteja fora do ar.

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (rotas)
- [Axios](https://axios-http.com/) (requisições HTTP)
- [json-server](https://github.com/typicode/json-server) (API simulada a partir do `db.json`)

## Dados cadastrados

| Recurso | Campos |
|---|---|
| Aluno | `nome`, `email`, `cpf`, `data_nascimento`, `endereco` |
| Professor | `nome`, `email`, `cpf`, `disciplina`, `data_admissao` |

O `id` de cada registro é gerado automaticamente pelo json-server.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (confira com `node -v` no terminal).

## Como baixar o projeto

Clone o repositório (troque pelo link do seu repositório):

```powershell
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Depois, abra a pasta do projeto no VS Code ou entre nela pelo terminal com `cd`.

## Como instalar as dependências

Dentro da pasta do projeto, rode:

```powershell
npm install
```

## Como rodar o projeto

O projeto precisa de **dois terminais abertos ao mesmo tempo**: um para a API simulada e outro para a aplicação React.

**Terminal 1 — API simulada (json-server):**

```powershell
npx json-server --watch db.json --port 3000
```

**Terminal 2 — aplicação React (Vite):**

```powershell
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal (geralmente `http://localhost:5173`).

> Se aparecer uma mensagem de erro de conexão na tela, confira se o Terminal 1 (json-server) ainda está rodando.

## Endpoints da API

| Método | Rota | Ação |
|---|---|---|
| `GET` | `/alunos` | Lista os alunos |
| `POST` | `/alunos` | Cadastra um aluno |
| `DELETE` | `/alunos/:id` | Exclui um aluno |
| `GET` | `/professores` | Lista os professores |
| `POST` | `/professores` | Cadastra um professor |
| `DELETE` | `/professores/:id` | Exclui um professor |

## Estrutura do projeto

```
db.json                         → "banco de dados" do json-server
src/
├── services/
│   ├── alunoService.js         → chamadas à API de alunos
│   └── professorService.js     → chamadas à API de professores
├── components/
│   ├── BarraNavegacao.jsx
│   ├── CampoTexto.jsx
│   ├── CardAluno.jsx
│   ├── CardProfessor.jsx
│   ├── FormularioAluno.jsx
│   ├── FormularioProfessor.jsx
│   ├── ListaAlunos.jsx
│   ├── ListaProfessores.jsx
│   └── MensagemErro.jsx
├── pages/
│   ├── PaginaInicial.jsx
│   ├── PaginaListagem.jsx
│   ├── PaginaCadastro.jsx
│   ├── PaginaListagemProfessores.jsx
│   └── PaginaCadastroProfessor.jsx
├── App.jsx                     → estados, funções do CRUD e rotas
└── App.css
```

## Screenshots

_Adicione aqui capturas de tela do projeto em funcionamento (página inicial, listagem e cadastro de professores)._

## Autor

**João Felipe Martins Teodoro** — Curso Técnico em Informática, IFRN Campus Pau dos Ferros.