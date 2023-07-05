const app = require("./app/app");

const port = 8080;
app.listen(port, () => {
  console.log(`Express Server running at http://localhost:${port}`);
});
