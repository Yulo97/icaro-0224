const renderizarLogin = (req, res) => {
  res.render("login.ejs");
};

const renderizarIndex = (req, res) => {
  res.render("index.ejs");
};

const renderizarAdministracion = (req, res) => {
  res.render("admin.ejs");
};

module.exports = {
  renderizarIndex,
  renderizarLogin,
  renderizarAdministracion,
};
