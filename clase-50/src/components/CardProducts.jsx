import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button } from "antd";
import { Typography } from "antd";
import axios from "axios";
import { Image } from "antd";
import { useParams } from "react-router-dom";

export const CardProduct = ({ id }) => {
  // const {id} = useParams()

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Card
      style={{
        width: "250px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px",
        margin: "25px",
      }}
      cover={<Image width={200} src={product.image} />}
    >
      <Typography.Title level={5}>{product.title}</Typography.Title>
      <Typography>${product.price}</Typography>

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
        <Button variant="solid" color="primary">
          Comprar
        </Button>
      </div>
    </Card>
  );
};
