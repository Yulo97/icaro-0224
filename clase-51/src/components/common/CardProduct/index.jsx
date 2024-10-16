import React from "react";
import { Card, Typography, Button, Image } from "antd";
import { useCart } from "../../../stores/useCart.js";
import { alertProductAdd } from "../../../utils/alerts.js";

export const CardProduct = ({ product }) => {
  const addCart = useCart((state) => state.addCart);

  const handleComprar = (item) => {
    addCart({
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
    });

    alertProductAdd("Producto Agregado");
  };

  return (
    <Card
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
        padding: "25px",
        margin: "25px",
      }}
      cover={<Image width={200} src={product.image} />}
    >
      <Typography.Title level={5}>{product.title}</Typography.Title>
      <Typography>Precio: ${product.price}</Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <Button variant="outlined" color="danger">
          Ver
        </Button>
        <Button
          variant="solid"
          color="primary"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            handleComprar(product);
          }}
        >
          Comprar
        </Button>
      </div>
    </Card>
  );
};
