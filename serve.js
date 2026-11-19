// 本地静态服务器：用 http:// 打开本页，YouTube 嵌入才能正常播放（file:// 会被拒，报错误 153）
// 用法：双击 start.cmd，或命令行执行 node serve.js
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = __dirname;
const START_PORT = Number(process.env.PORT || 8123);
const NO_OPEN = process.env.NO_OPEN === "1" || process.argv.includes("--no-open");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp3": "audio/mpeg",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8"
};

function send(res, code, body, type) {
  res.writeHead(code, {
    "Content-Type": type || "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || "/").split("?")[0]);
  if (rel === "/") rel = "/index.html";
  const file = path.resolve(ROOT, "." + rel);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    send(res, 403, "403 forbidden");
    return;
  }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      send(res, 404, "404 not found: " + rel);
      return;
    }
    const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": st.size,
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*"
    });
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    fs.createReadStream(file).pipe(res);
  });
});

function openBrowser(url) {
  if (NO_OPEN) return;
  try {
    if (process.platform === "win32") {
      spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();
    } else if (process.platform === "darwin") {
      spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
    } else {
      spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
    }
  } catch (e) {
    /* 打不开浏览器就让用户手动点 */
  }
}

let port = START_PORT;
let tries = 0;
server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE" && tries < 20) {
    tries += 1;
    port += 1;
    server.listen(port, "127.0.0.1");
    return;
  }
  console.error("启动失败：", err && err.message ? err.message : err);
  process.exit(1);
});

server.listen(port, "127.0.0.1", () => {
  const url = "http://127.0.0.1:" + port + "/";
  console.log("");
  console.log("  音乐风格谱系 已启动");
  console.log("  " + url);
  console.log("  关掉这个窗口即停止服务。");
  console.log("");
  openBrowser(url);
});
