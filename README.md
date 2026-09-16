# 🌎 Geo-Explorer

> Plataforma fictícia de exploração de trilhas de aprendizagem, desafios de programação e certificados.

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)
![Tests](https://img.shields.io/badge/tests-node--test-6E9F18)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📝 Informações do repositório

**Projeto:** Geo-Explorer  
**Autor:** Nikolas  
**Finalidade:** Projeto educacional e de portfólio  


## 📌 Sobre o projeto

O **Geo-Explorer** é um projeto educacional criado para praticar desenvolvimento de software com uma aplicação simples baseada em comandos.

A pessoa usuária pode consultar trilhas de aprendizagem, receber desafios de código e gerar certificados fictícios. A aplicação usa uma base de dados em JSON e possui testes automatizados.

O projeto também inclui uma implementação didática de um **Servidor MCP (Model Context Protocol)** para demonstrar como funcionalidades de uma aplicação podem ser expostas a ferramentas compatíveis.

---

## 🎯 Objetivos

- Praticar organização de um projeto Node.js.
- Separar dados, regras de negócio, comandos e testes.
- Trabalhar com JSON.
- Criar testes automatizados.
- Documentar uma solução de portfólio.
- Praticar Git e GitHub.
- Estudar o conceito de MCP.
- Criar uma base fácil de expandir.

---

## 🚀 Funcionalidades

### 📚 Trilha

Consulta uma trilha por tecnologia e nível.

```bash
npm start -- trilha javascript iniciante
```

### 💻 Desafio

Gera um desafio de código correspondente à tecnologia e ao nível.

```bash
npm start -- desafio python intermediario
```

### 🏆 Certificado

Gera um certificado fictício.

```bash
npm start -- certificado java avancado "Maria Silva"
```

> Os certificados são fictícios e servem apenas para fins educacionais.

---

## 🧰 Tecnologias

- Node.js 20+
- JavaScript com ES Modules
- JSON
- Node.js Test Runner
- Git
- GitHub
- Model Context Protocol (MCP)

---

## 📁 Estrutura

```text
geo-explorer/
├── data/
│   └── tracks.json
├── src/
│   ├── commands/
│   │   ├── trilha.js
│   │   ├── desafio.js
│   │   └── certificado.js
│   ├── index.js
│   ├── mcp-server.js
│   └── utils.js
├── tests/
│   ├── trilha.test.js
│   ├── desafio.test.js
│   ├── certificado.test.js
│   └── mcp-server.test.js
├── docs/
│   └── mcp.md
├── .github/
│   └── workflows/
│       └── test.yml
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

---

## ⚙️ Instalação

### 1. Pré-requisitos

Instale o Node.js 20 ou superior.

Verifique:

```bash
node --version
npm --version
```

### 2. Clone o repositório

Depois de criar o repositório no GitHub:

```bash
git clone https://github.com/nikolas/geo-explorer.git
cd geo-explorer
```

### 3. Instale as dependências

```bash
npm install
```

> O projeto usa apenas módulos nativos do Node.js, portanto o comando pode não instalar pacotes adicionais. Ele ainda é mantido no fluxo para padronizar a preparação do projeto.

---

## ▶️ Executar

### Ajuda

```bash
npm start
```

### Trilha

```bash
npm start -- trilha javascript iniciante
```

### Desafio

```bash
npm start -- desafio python intermediario
```

### Certificado

```bash
npm start -- certificado java avancado "Maria Silva"
```

Também existem atalhos:

```bash
npm run trilha -- javascript iniciante
npm run desafio -- python intermediario
npm run certificado -- java avancado "Maria Silva"
```

---

## 🧪 Testes

Execute todos os testes:

```bash
npm test
```

Os testes cobrem:

- Consulta de trilhas válidas.
- Aliases de tecnologias.
- Tecnologias inexistentes.
- Níveis inválidos.
- Geração de desafios.
- Validação de parâmetros.
- Geração de certificados.
- Funcionamento básico do servidor MCP.

---

## 🔌 Servidor MCP

Execute:

```bash
npm run mcp
```

O servidor expõe ferramentas para:

- Listar trilhas.
- Consultar uma trilha.
- Obter um desafio.
- Gerar dados de certificado.

A documentação está em:

```text
docs/mcp.md
```

A implementação é intencionalmente pequena e didática, sem dependências externas, para tornar o fluxo de mensagens fácil de estudar.

---

## 🗃️ Base de dados

Os dados estão em:

```text
data/tracks.json
```

Atualmente existem trilhas fictícias para:

- JavaScript
- Python
- Java

Cada tecnologia possui:

- Descrição.
- Nível iniciante.
- Nível intermediário.
- Nível avançado.
- Módulos.
- Desafio correspondente.

Para adicionar uma nova tecnologia, basta seguir a mesma estrutura JSON.

---

## 🔐 Segurança

Antes de publicar:

- Não inclua senhas.
- Não inclua tokens ou API keys.
- Não inclua chaves privadas.
- Não inclua dados pessoais.
- Revise o `.gitignore`.

O projeto não precisa de credenciais para funcionar.

---

## 🌱 Melhorias realizadas

A implementação foi além do fluxo mínimo ao incluir:

- Três tecnologias fictícias.
- Três níveis por tecnologia.
- Aliases como `js` para JavaScript.
- Mensagens de erro para entradas inválidas.
- Testes automatizados.
- Teste básico do servidor MCP.
- Workflow de CI no GitHub Actions.
- Arquivo de licença MIT.
- Documentação específica para MCP.
- Certificado com nome, data e código fictício.

---

## 🚀 Ideias para evolução

- Criar uma interface web.
- Persistir progresso em banco de dados.
- Adicionar autenticação.
- Criar desafios personalizados.
- Permitir avaliação automática de código.
- Exportar certificados em PDF.
- Criar leaderboard.
- Adicionar novas linguagens.
- Utilizar um SDK de MCP em uma integração de produção.
- Criar uma API HTTP para consumo externo.

---

## 📚 O que aprendi

Durante o desenvolvimento do Geo-Explorer, os principais aprendizados foram:

### Organização

Separação de responsabilidades entre dados, comandos, utilitários, testes e documentação.

### JavaScript/Node.js

Uso de ES Modules, leitura de JSON, argumentos de linha de comando e módulos nativos.

### Testes

Criação de testes automatizados usando o test runner nativo do Node.js.

### Git e GitHub

Organização de repositório, documentação e automação com GitHub Actions.

### MCP

Contato com a ideia de disponibilizar recursos de uma aplicação como ferramentas estruturadas para outros clientes ou agentes compatíveis.

---

## 🎓 Objetivo educacional

Este projeto foi criado para estudo e portfólio.

As trilhas, desafios e certificados apresentados são fictícios e não equivalem a cursos ou certificações profissionais oficiais.

---

## 👨‍💻 Autor

**Nikolas**

GitHub: `https://github.com/nikolas`

Substitua os campos acima pelos seus dados antes de publicar.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE`.

---

## ⭐ Conclusão

O Geo-Explorer reúne dados, comandos, testes, documentação, automação e uma introdução à integração via MCP em um único projeto de portfólio.

A proposta é manter a solução simples de compreender, testar e evoluir.
