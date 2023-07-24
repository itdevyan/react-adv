import React, { ReactElement, createContext, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
  // en caso de utilizar HOC, se debe poner opcional children
  children?: ReactElement | ReactElement[];
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductoContextProps {
  counter: Number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductoContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt={img} />;
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  let titleToShow: string;
  if (title) {
    titleToShow = title;
  } else if (product.title) {
    titleToShow = product.title;
  } else {
    titleToShow = "Product";
  }
  return <span className={styles.productDescription}>{titleToShow}</span>;
};

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// Otra forma de exportar HOC
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
