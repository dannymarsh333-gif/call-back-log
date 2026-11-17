// Call Back Log - tiny local server. No dependencies, just Node.
// Serves the app and stores all data in app/data.json on this computer.
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");
const DATA_FILE = path.join(__dirname, "data.json");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
};

// FAKE sample contacts, shared with the browser version so both start the same.
const { sampleState } = require("./public/sample.js");

function readState() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (e) {
    return sampleState();
  }
}

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/api/state") {
    if (req.method === "GET") return send(res, 200, JSON.stringify(readState()), MIME[".json"]);
    if (req.method === "PUT") {
      let body = "";
      req.on("data", (c) => {
        body += c;
        if (body.length > 5e6) req.destroy();
      });
      req.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          if (!parsed || !Array.isArray(parsed.contacts)) throw new Error("bad shape");
          fs.writeFileSync(DATA_FILE, JSON.stringify(parsed, null, 2));
          send(res, 200, "{}", MIME[".json"]);
        } catch (e) {
          send(res, 400, "Bad data");
        }
      });
      return;
    }
    return send(res, 405, "Method not allowed");
  }

  // Static files, kept inside the public folder.
  let rel = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const file = path.normalize(path.join(PUBLIC, rel));
  if (!file.startsWith(PUBLIC)) return send(res, 403, "Forbidden");
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, "Not found");
    send(res, 200, data, MIME[path.extname(file)] || "application/octet-stream");
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("\nCall Back Log is running.\n");
  console.log(`  On this computer:  http://localhost:${PORT}`);
  for (const list of Object.values(os.networkInterfaces())) {
    for (const n of list) {
      if (n.family === "IPv4" && !n.internal) console.log(`  On your phone:     http://${n.address}:${PORT}  (same Wi-Fi)`);
    }
  }
  console.log("\nPress Ctrl+C to stop.\n");
});
