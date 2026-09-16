import test from "node:test";
import assert from "node:assert/strict";
import { trilha, trilhaData } from "../src/commands/trilha.js";

test("retorna trilha de JavaScript iniciante", () => {
  const result = trilha("javascript", "iniciante");
  assert.match(result, /JavaScript/);
  assert.match(result, /Iniciante/);
  assert.match(result, /Fundamentos da linguagem/);
});

test("aceita alias js", () => {
  const data = trilhaData("js", "iniciante");
  assert.equal(data.tecnologia, "JavaScript");
});

test("retorna mensagem para trilha inexistente", () => {
  const result = trilha("rust", "iniciante");
  assert.match(result, /não encontrada/i);
});
