import React, { useContext } from "react";

import { ContextLocalization } from "../../App";

import styles from './styles.module.scss';

const ProductsList = ({ products = [] }) => {
  const { local } = useContext(ContextLocalization);

  return (
    <div className={styles.productsListWrapper}>
      <p>ProductsList</p>
      <div className={styles.productsList}>
        {
          products?.map((productData) => {
            const product = productData[local] || {};

            return (
              <div className={styles.product} key={productData?.id}>
                <p>Title: { product?.title }</p>
                <p>Description: { product?.description }</p>
                <p>Location: { product?.location }</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ProductsList;
