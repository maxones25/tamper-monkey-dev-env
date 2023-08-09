const fs = require("fs");

class UpdateVersionPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("UpdateVersionPlugin", () => {
      const header = JSON.parse(fs.readFileSync("./header.json", "utf8"));

      const version = parseFloat(header.version);
      const newVersion = (version + 0.01).toFixed(2);
      header.version = newVersion;

      fs.writeFileSync("./header.json", JSON.stringify(header), "utf8");

      console.log("version updated from " + version + " to " + newVersion);
    });
  }
}

module.exports = UpdateVersionPlugin;
