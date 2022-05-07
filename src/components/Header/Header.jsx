import clsx from "clsx";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Header.module.scss';

const Header = (props) => {
  const [ active, setActive ] = useState(false);
  const navigate = useNavigate();

  const onRedirect = (redirectPath) => {
    navigate(redirectPath);
  }

  return (
    <div className={clsx(styles.headerWrapper, { [styles.active]: active })}>
      <header>
        <div className={styles.logo}>
          {/*<img src="../../assets/img/tree-logo.png" alt="Logo" />*/}
          <h3>Bad Bodenteich</h3>
        </div>

        <div className={styles.links}>
          <ul>
            <li><a onClick={() => onRedirect('/')}>Products</a></li>
            <li><a onClick={() => onRedirect('/location')}>Location</a></li>
            <li><a onClick={() => onRedirect('/aboutUs')}>About Us</a></li>
          </ul>
        </div>

        <div className={styles.overlay} />

        <div className={styles.hamburgerMenu} onClick={() => setActive(!active)}>
          <div className={styles.bar} />
        </div>
      </header>
    </div>
  );
}

export default Header;
