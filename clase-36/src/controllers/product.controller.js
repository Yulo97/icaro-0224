const { Product } = require("../models/product.model.js");
const { Sequelize } = require("sequelize");

const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Product.findByPk(id);

    if (response) {
      return res.status(200).json(response);
    }
    res.status(400).json({ status: "failure", message: "El producto no existe" });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const createProduct = async (req, res) => {
  const body = req.body;

  try {
    const response = await Product.create(body);
    res.status(200).json({ status: "Success", message: `Usuario ID: ${response.id} creado` });
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const response = await Product.update(body, { where: { id: id } });

    if (response[0])
      return res.status(200).json({ status: "success", message: "Producto actualizado" });
    res.status(400).json({ status: "warning", message: "No se actualizado el producto" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: "Ocurrio un error al intentar actualizar el producto" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Product.destroy({ where: { id: id } });

    if (response)
      return res.status(200).json({ status: "success", message: "Producto actualizado" });
    res.status(400).json({ status: "warning", message: "No se encotro el producto a eliminar" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: "Ocurrio un error al intentar borrar el producto" });
  }
};

// Actualizar varios
const updateAllPrices = async (req, res) => {
  try {
    const response = await Product.update(
      {
        price: Sequelize.literal(`price * ${1 + 0.3}`),
      },
      { where: {} }
    );

    res.json(response);
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Ocurrio un error al intentar actualizar todos los precios",
      error: error.message,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateAllPrices,
};
