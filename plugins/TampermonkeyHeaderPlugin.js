const fs = require("fs");

class TampermonkeyHeaderPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("TampermonkeyHeaderPlugin", (stats) => {
      const outputPath = stats.compilation.outputOptions.path;
      const filename = stats.compilation.outputOptions.filename;
      const bundlePath = `${outputPath}/${filename}`;

      const data = fs.readFileSync(bundlePath, "utf8");

      const header = JSON.parse(fs.readFileSync("./header.json", "utf8"));

      const headerString = Object.entries(header)
        .reduce((arr, [key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => {
              arr.push([key, v]);
            });
          } else {
            arr.push([key, value]);
          }
          return arr;
        }, [])
        .map(([key, value]) => `// @${key} ${value}`)
        .join("\n");

      fs.writeFileSync(
        bundlePath,
        "// ==UserScript==\n" + headerString + "\n// ==/UserScript==\n" + data,
        "utf8"
      );
    });
  }
}

module.exports = TampermonkeyHeaderPlugin;
