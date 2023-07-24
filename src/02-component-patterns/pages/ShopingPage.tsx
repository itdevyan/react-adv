import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};

export const ShopingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Cuando un componente se tiene apertura y cerradura propia
        (ej. <ProductCard></ProductoCard>) significa que vamos a utilizar
        un HOC (higher-order component) por lo cual recibirá hijos */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        {/* Otra forma de usar HOC */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Café" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
