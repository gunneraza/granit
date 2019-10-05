const Express = require("express");
const Server  = Express();
const open    = require("open");
const CONFIG  = require("./server.config");

console.log(`Server is running at ${CONFIG.URI}`);
Server.use("/", Express.static(CONFIG.PATH));
Server.listen(CONFIG.PORT);
open(CONFIG.URI);
