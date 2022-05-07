import React, { useState } from "react";

import styles from './styles.module.scss';

const AboutUs = (props) => {
  const [ active, setActive ] = useState(false);

  return (
    <div className={styles.aboutUsWrapper}>
      <p>AboutUs</p>
    </div>
  );
}

export default AboutUs;
