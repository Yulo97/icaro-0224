import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const CardProduct = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: "300px", m: 2 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={product.image}
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" variant="outlined" color="secondary">
            Comprar
          </Button>
          <Button size="small" variant="contained">
            Agregar al Carrito
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
