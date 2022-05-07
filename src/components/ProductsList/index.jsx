import React from "react";

import styles from './styles.module.scss';

const ProductsList = ({ products = [] }) => {
  return (
    <div className={styles.productsListWrapper}>
      <p>ProductsList</p>
      <div className={styles.productsList}>
        {
          products?.map((product) => (
            <div className={styles.product} key={product.id}>
              <p>Title: { product.title }</p>
              <p>Description: { product.description }</p>
              <p>Location: { product.location }</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductsList;
