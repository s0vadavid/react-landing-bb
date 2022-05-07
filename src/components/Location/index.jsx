import React, { useState } from "react";

import styles from './styles.module.scss';

const Location = (props) => {
  const [ active, setActive ] = useState(false);

  return (
    <div className={styles.locationWrapper}>
      <p>Location</p>
    </div>
  );
}

export default Location;
