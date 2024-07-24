const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index");
const { config } = require("./config/config");

const app = express();

// para aceptar post
// app.use(express.json());

const whiteList = ["http://localhost:3000"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
// app.use(cors()) // habilitar a cualquier origen de la peticion
app.use(cors(options));

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});

// route
routerApi(app);
