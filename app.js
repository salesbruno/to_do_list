const express = require("express");
const checkListRoute = require("./src/routes/checklist");
require("./config/database");

const app = express();
app.use(express.json());

app.use("/checklists", checkListRoute);

app.listen(3000, () => {
  console.log("Servidor foi inicado");
});
