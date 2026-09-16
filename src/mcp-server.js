import { createInterface } from "node:readline";
import { trilhaData } from "./commands/trilha.js";
import { findTrack, loadTracks, listTechnologies, listLevels } from "./utils.js";

const rl = createInterface({
  input: process.stdin,
  crlfDelay: Infinity
});

/*
 * Servidor MCP mínimo, sem dependências externas.
 * Ele usa JSON por linha (JSONL) para manter o projeto simples e
 * facilitar testes e entendimento durante o desafio.
 *
 * Métodos suportados:
 * - initialize
 * - tools/list
 * - tools/call
 *
 * Ferramentas:
 * - listar_trilhas
 * - consultar_trilha
 * - obter_desafio
 * - gerar_certificado
 */

const tools = [
  {
    name: "listar_trilhas",
    description: "Lista as tecnologias e níveis disponíveis no Geo-Explorer.",
    inputSchema: { type: "object", properties: {} }
  },
  {
    name: "consultar_trilha",
    description: "Consulta uma trilha por tecnologia e nível.",
    inputSchema: {
      type: "object",
      properties: {
        tecnologia: { type: "string" },
        nivel: { type: "string", enum: listLevels() }
      },
      required: ["tecnologia", "nivel"]
    }
  },
  {
    name: "obter_desafio",
    description: "Obtém o desafio de uma tecnologia e nível.",
    inputSchema: {
      type: "object",
      properties: {
        tecnologia: { type: "string" },
        nivel: { type: "string", enum: listLevels() }
      },
      required: ["tecnologia", "nivel"]
    }
  },
  {
    name: "gerar_certificado",
    description: "Gera o texto de um certificado fictício.",
    inputSchema: {
      type: "object",
      properties: {
        tecnologia: { type: "string" },
        nivel: { type: "string", enum: listLevels() },
        nome: { type: "string" }
      },
      required: ["tecnologia"]
    }
  }
];

function respond(id, result) {
  process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
}

function error(id, code, message) {
  process.stdout.write(JSON.stringify({
    jsonrpc: "2.0",
    id,
    error: { code, message }
  }) + "\n");
}

function handleTool(name, args = {}) {
  switch (name) {
    case "listar_trilhas":
      return {
        tecnologias: listTechnologies(),
        niveis: listLevels(),
        quantidadeTecnologias: Object.keys(loadTracks()).length
      };

    case "consultar_trilha": {
      const data = trilhaData(args.tecnologia, args.nivel);
      if (!data) throw new Error("Trilha não encontrada.");
      return data;
    }

    case "obter_desafio": {
      const data = findTrack(args.tecnologia, args.nivel);
      if (!data) throw new Error("Trilha não encontrada.");
      return {
        tecnologia: data.tecnologia,
        nivel: data.nivel,
        desafio: data.desafio
      };
    }

    case "gerar_certificado": {
      const data = findTrack(args.tecnologia, args.nivel ?? "iniciante");
      if (!data) throw new Error("Trilha não encontrada.");
      return {
        tecnologia: data.tecnologia,
        nivel: data.nivel,
        nome: args.nome ?? "Nome do aluno",
        observacao: "Certificado fictício para fins educacionais."
      };
    }

    default:
      throw new Error(`Ferramenta desconhecida: ${name}`);
  }
}

rl.on("line", (line) => {
  if (!line.trim()) return;

  try {
    const request = JSON.parse(line);
    const { id, method, params = {} } = request;

    if (method === "initialize") {
      respond(id, {
        protocolVersion: "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "geo-explorer", version: "1.0.0" }
      });
      return;
    }

    if (method === "tools/list") {
      respond(id, { tools });
      return;
    }

    if (method === "tools/call") {
      const result = handleTool(params.name, params.arguments);
      respond(id, {
        content: [
          { type: "text", text: JSON.stringify(result, null, 2) }
        ],
        structuredContent: result
      });
      return;
    }

    error(id, -32601, `Método não suportado: ${method}`);
  } catch (err) {
    error(null, -32603, err instanceof Error ? err.message : "Erro interno.");
  }
});
