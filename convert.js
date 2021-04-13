#!/usr/bin/env node

const fs = require("fs");
const JSON5 = require("json5");

fs.writeFileSync("default.json", JSON.stringify(JSON5.parse(fs.readFileSync("renovate.json5", "utf8")), null, 2));
