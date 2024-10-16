import { useState } from "react";
import styles from "./Navbar.module.css";
import { Button, Drawer, List, Avatar } from "antd";
import { useCart } from "../../../stores/useCart";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useCart((state) => state.cart);

  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Carrito</li>
          <li>
            <Button onClick={() => setOpen(true)}>Carrito</Button>
          </li>
        </ul>
      </div>

      <Drawer
        onClose={() => setOpen(false)}
        open={open}
        title={"Tus Productos"}
      >
        <List>
          {cart.map((product, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={<Avatar src={product.image} />}
                title={product.title}
                description={`$${product.price}`}
              />
            </List.Item>
          ))}
        </List>
      </Drawer>
    </>
  );
};
