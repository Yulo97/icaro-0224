const getAllProducts = (req, res) => {
  res.send("Devuelve todos los productos");
};

const getProductById = (req, res) => {
  const id = req.params.id;

  if (req.headers.token) {
    if (req.headers.token === "123") {
      return res.status(200).json({
        id: id,
        nombre: "Tetera",
        marca: "Liliana",
        image: "https://asdjaosd.com/picachu",
      });
    }
    res.status(401).json({ message: "Token invalido" });
  } else {
    res.status(401).json({ message: "Token no proporcionado" });
  }
};

module.exports = { getAllProducts, getProductById };
