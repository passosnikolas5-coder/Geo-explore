import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";

function requestMcp(payload) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["src/mcp-server.js"], {
      cwd: new URL("..", import.meta.url)
    });

    let output = "";
    const timer = setTimeout(() => {
      child.kill();
      reject(new Error("Tempo excedido ao aguardar resposta do MCP."));
    }, 3000);

    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
      const lines = output.trim().split("\n");
      if (lines.length) {
        clearTimeout(timer);
        child.kill();
        resolve(JSON.parse(lines[0]));
      }
    });

    child.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });

    child.stdin.write(JSON.stringify(payload) + "\n");
  });
}

test("MCP responde ao método tools/list", async () => {
  const response = await requestMcp({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/list"
  });

  assert.equal(response.id, 1);
  assert.equal(Array.isArray(response.result.tools), true);
  assert.equal(response.result.tools.length, 4);
});
