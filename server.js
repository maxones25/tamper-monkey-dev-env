const express = require("express");
const path = require("path");
const webpack = require("webpack");
const config = require("./webpack.config.js");

const app = express();
const port = 3000; // You can change the port if needed

const compiler = webpack(config);

// Watch for file changes and rebuild
compiler.watch({}, (err, stats) => {
  if (err) console.error(err);
  else console.log(stats.toString({ colors: true }));
});

// Serve static files from the build directory
app.use("/static", express.static(path.resolve(__dirname, "build")));

// Endpoint to serve the bundled JS file
app.get("/bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "bundle.js"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
