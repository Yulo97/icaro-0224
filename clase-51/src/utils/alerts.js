import { toast } from "react-toastify";

export const alertProductAdd = (message) => {
  toast(message, {
    autoClose: 3000,
    type: "success",
    theme: "dark",
    position: "top-center",
  });
};

export const alertProductDelete = (message) => {
  toast(message, {
    autoClose: 3000,
    type: "error",
    theme: "dark",
    position: "top-center",
  });
};
