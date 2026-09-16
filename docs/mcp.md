# Servidor MCP

O Geo-Explorer inclui um servidor MCP educacional em `src/mcp-server.js`.

## O que ele expõe

O servidor disponibiliza quatro ferramentas:

| Ferramenta | Finalidade |
|---|---|
| `listar_trilhas` | Lista tecnologias e níveis |
| `consultar_trilha` | Retorna uma trilha específica |
| `obter_desafio` | Retorna o desafio de uma trilha |
| `gerar_certificado` | Gera os dados de um certificado fictício |

## Executar

```bash
npm run mcp
```

O processo recebe requisições JSON por linha na entrada padrão e devolve respostas JSON por linha.

Exemplo de chamada:

```json
{"jsonrpc":"2.0","id":1,"method":"tools/list"}
```

Exemplo de chamada de ferramenta:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "consultar_trilha",
    "arguments": {
      "tecnologia": "javascript",
      "nivel": "iniciante"
    }
  }
}
```

## Observação importante

Esta implementação foi criada para fins didáticos, tornando o protocolo observável e fácil de estudar. Em uma integração de produção, recomenda-se utilizar o SDK oficial de MCP apropriado ao ambiente e seguir a versão do protocolo suportada pelo cliente utilizado.
