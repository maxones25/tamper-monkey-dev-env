const fs = require("fs");
const path = require("path");

const metaFilename = path.join(__dirname, "../src/meta.js");
const scriptFilename = path.join(__dirname, "../src/script.js");
const distFilename = path.join(__dirname, "../build/script.js");

function incrementVersion(version) {
  const parts = version.split(".");
  parts[2] = parseInt(parts[2], 10) + 1; // increment the patch version
  return parts.join(".");
}

const metaData = fs.readFileSync(metaFilename, "utf-8");
const scriptData = fs.readFileSync(scriptFilename, "utf-8");

const versionLine = metaData
  .split("\n")
  .find((line) => line.includes("@version"));

const versionNumber = versionLine.match(/[\d\.]+/)[0];
const newVersionNumber = incrementVersion(versionNumber);
const updatedMetaData = metaData.replace(versionNumber, newVersionNumber);

console.log(`new version: ${newVersionNumber}`);

const distData =
  updatedMetaData +
  `
(function() {
  'use strict';

  ${scriptData}
})();
`;

fs.writeFileSync(metaFilename, updatedMetaData, "utf8");
fs.writeFileSync(distFilename, distData, "utf8");

console.log(`files updated!`);
