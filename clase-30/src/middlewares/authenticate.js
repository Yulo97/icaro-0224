const isAuthenticate = (req, res, next) => {
  if (req.session.name) return next();

  res.redirect("/login");
};

const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) return next();
  res.send("No eres admin para acceder aqui");
};

module.exports = { isAuthenticate, isAdmin };
