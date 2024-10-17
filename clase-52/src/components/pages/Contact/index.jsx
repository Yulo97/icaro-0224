import { Grid2, TextField, Typography } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Grid2
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >
      <Grid2
        container
        sx={{
          mt: 12,
          display: "flex",
          justifyContent: "center",
          maxWidth: "400px",
        }}
        spacing={4}
      >
        <Typography variant="h4" color="initial">
          Contacte con Nosotros
        </Typography>
        <TextField fullWidth id="" label="Email" />
        <TextField fullWidth id="" label="Telefono" />
        <TextField fullWidth id="" label="Mensaje" />
      </Grid2>
    </Grid2>
  );
};
