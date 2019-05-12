const express = require("express");
const path = require("path");
const livereload = require("livereload");
const { PORT, IS_DEV, } = require("../common/config");

const app = express();
const dist = path.resolve(__dirname, "../dist");

app.use(express.static(dist));

app.listen(PORT, console.log(PORT));

if (IS_DEV) {
    const reload = livereload.createServer();
    reload.watch(dist);
}
