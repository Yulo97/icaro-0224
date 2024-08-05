const express = require("express");
const routerViews = require("./routes/views.routes");
const routerUser = require("./routes/user.routes");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Servido levantado en puerto ${PORT}`));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(
  session({
    secret: "123456",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

app.set("view engine", "ejs");

// Router
app.use("/", routerViews);
app.use("/user", routerUser);
