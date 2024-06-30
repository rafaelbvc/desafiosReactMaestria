const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config()

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
