import clsx from "clsx";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContextLocalization } from "../../App";

import styles from './Header.module.scss';

const Header = ({ locals, systemLocal }) => {
  const [ active, setActive ] = useState(false);
  const navigate = useNavigate();

  const { local, setLocal } = useContext(ContextLocalization);

  const onRedirect = (redirectPath) => {
    navigate(redirectPath);
  }

  const getText = (key) => systemLocal && systemLocal[local] && systemLocal[local][key]

  return (
    <div className={clsx(styles.headerWrapper, { [styles.active]: active })}>
      <header>
        <div className={styles.logo}>
          {/*<img src="../../assets/img/tree-logo.png" alt="Logo" />*/}
          <h3>Bad Bodenteich</h3>
        </div>

        <div className={styles.links}>
          <ul>
            <li><a onClick={() => onRedirect('/')}>{ getText('products') }</a></li>
            <li><a onClick={() => onRedirect('/location')}>{ getText('location') }</a></li>
            <li><a onClick={() => onRedirect('/aboutUs')}>{ getText('about') }</a></li>
          </ul>
        </div>

        <div className={styles.localWrapper}>
          {
            locals.map((localData) => (
              <div
                key={localData}
                className={clsx(styles.local, { [styles.active]: local === localData })}
                onClick={() => setLocal(localData)}
              >
                {localData}
              </div>
            ))
          }
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
