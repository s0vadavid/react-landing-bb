import React, { useState } from "react";

import styles from './styles.module.scss';

const ProductsList = (props) => {
  const [ active, setActive ] = useState(false);

  return (
    <div className={styles.productsListWrapper}>
      <p>ProductsList</p>
    </div>
  );
}

export default ProductsList;
