import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

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
