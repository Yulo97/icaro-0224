import { Router } from "express";
import connection from "../db/connection.js";

const router = Router();

router.get("/", async (req, res) => {
  const [results, fields] = await connection.query("SELECT * FROM usuarios");

  res.json(results);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const [results, fields] = await connection.query(
    `SELECT * FROM usuarios WHERE USER_ID = ? LIMIT ?`,
    [id, 1]
  );

  res.json(results);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const [results, fields] = await connection.query(
    `DELETE FROM usuarios WHERE USER_ID = ? LIMIT ?`,
    [id, 1]
  );

  if (!results.affectedRows) {
    res.status(404).json({ status: "failure", message: "Usuario no encontrado" });
  } else {
    res.status(200).json({ status: "success", message: "Usuario Eliminado" });
  }
});

export default router;
