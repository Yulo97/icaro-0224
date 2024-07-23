const { Router } = require("express");

const router = Router();

// Consultar todos los clientes
router.get("/", (req, res) => {
  res.json({ clientes });
});

// Consultar cliente por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const cliente = clientes.find((cliente) => cliente.id == id);
  if (!cliente) return res.json({ message: "No se encontro el cliente" });
  res.json(cliente);
});

// Crear cliente
router.post("/", (req, res) => {
  res.json({ message: "Se creo un cliente" });
});

// Actualizacion de cliente
router.put("/", (req, res) => {
  res.json({ message: "Se actualizo un cliente" });
});

router.delete("/", (req, res) => {
  res.json({ message: "Se elimino un cliente" });
});

const clientes = [
  {
    id: 1,
    nombre: "Carlos Gómez",
    email: "carlos.gomez@example.com",
    telefono: "+54 341 123 4567",
    direccion: "Calle Falsa 123, Rosario, Santa Fe, Argentina",
  },
  {
    id: 2,
    nombre: "María López",
    email: "maria.lopez@example.com",
    telefono: "+54 351 987 6543",
    direccion: "Avenida Siempre Viva 742, Córdoba, Argentina",
  },
  {
    id: 3,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    telefono: "+54 11 321 6549",
    direccion: "San Martín 456, Buenos Aires, Argentina",
  },
  {
    id: 4,
    nombre: "Ana Fernández",
    email: "ana.fernandez@example.com",
    telefono: "+54 261 789 1234",
    direccion: "Calle Mendoza 789, Mendoza, Argentina",
  },
  {
    id: 5,
    nombre: "José Ramírez",
    email: "jose.ramirez@example.com",
    telefono: "+54 379 654 3210",
    direccion: "Belgrano 321, Corrientes, Argentina",
  },
  {
    id: 6,
    nombre: "Laura Martínez",
    email: "laura.martinez@example.com",
    telefono: "+54 223 456 7890",
    direccion: "Colon 987, Mar del Plata, Argentina",
  },
  {
    id: 7,
    nombre: "Pedro García",
    email: "pedro.garcia@example.com",
    telefono: "+54 387 321 4567",
    direccion: "Rivadavia 654, Salta, Argentina",
  },
  {
    id: 8,
    nombre: "Sofía Torres",
    email: "sofia.torres@example.com",
    telefono: "+54 381 789 4561",
    direccion: "Mitre 123, Tucumán, Argentina",
  },
  {
    id: 9,
    nombre: "Miguel Sánchez",
    email: "miguel.sanchez@example.com",
    telefono: "+54 221 456 1234",
    direccion: "La Plata 789, La Plata, Argentina",
  },
  {
    id: 10,
    nombre: "Camila Gómez",
    email: "camila.gomez@example.com",
    telefono: "+54 280 123 9876",
    direccion: "San Juan 321, Puerto Madryn, Argentina",
  },
];

module.exports = router;
