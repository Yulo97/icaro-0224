const express = require("express");
const routerUser = require("./routes/user.routes.js");
const routerViews = require("./routes/views.routes.js");
const morgan = require("morgan");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(
  sessions({
    secret: "123456",
    saveUninitialized: false,
    cookie: { maxAge: 86400000 },
    resave: false,
  })
);

// Router
app.use("/user", routerUser);
app.use("/views", routerViews);
