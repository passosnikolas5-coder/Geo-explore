import test from "node:test";
import assert from "node:assert/strict";
import { desafio } from "../src/commands/desafio.js";

test("gera desafio de Python intermediário", () => {
  const result = desafio("python", "intermediario");
  assert.match(result, /Python/);
  assert.match(result, /Intermediário/);
  assert.match(result, /Processador de dados/);
});

test("valida parâmetros obrigatórios", () => {
  assert.equal(desafio("python"), "Uso: desafio <tecnologia> <nivel>");
});

test("retorna mensagem quando nível não existe", () => {
  const result = desafio("python", "especialista");
  assert.match(result, /não foi possível gerar/i);
});
