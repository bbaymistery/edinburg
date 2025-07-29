const express = require("express");
const next = require("next");
const compression = require("compression");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // 🔥 GZIP sıkıştırma aktif!
  server.use(compression());

  // 👇 Özel route'larını koruyorum
  server.get("/a", (req, res) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  // Diğer tüm route'lar
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(9000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:9000");
  });
});
