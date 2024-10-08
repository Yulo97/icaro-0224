import React from "react";
import { useContentStore } from "../../stores/useContentStore";

export const Hijo = () => {
  const tema = useContentStore((state) => state.tema);
  const toggleTema = useContentStore((state) => state.toggleTema);

  return <button onClick={toggleTema}>{tema === "oscuro" ? "🌙" : "🌞"}</button>;
};
