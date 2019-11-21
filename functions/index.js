const fs = require("fs");
const path = require("path");

const DIRECTORY = "./services";
fs.readdirSync(path.resolve(__dirname, DIRECTORY)).forEach(file => {
  if (file.endsWith(".js")) {
    const filename = path.basename(file);
    const functions = require(`${DIRECTORY}/${filename}`);
    for (var i in functions) {
      exports[i] = functions[i];
    }
  }
});
