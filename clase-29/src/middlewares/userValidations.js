const autenticacion = (req, res, next) => {
  if (req.session.username) {
    console.log(req.session.username);
    next();
  } else {
    console.log("Un usuario no logueado quiso ingresar a ver los productos");
    res.redirect("/views/login");
  }
};

module.exports = { autenticacion };
