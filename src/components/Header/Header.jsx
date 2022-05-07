import clsx from "clsx";
import React, {useState} from "react";
import styles from './Header.module.css';

const Header = (props) => {
    const [ active, setActive ] = useState(false);

    return (
      <div className={clsx(
          styles.bigWrapper,
          {
              [styles.active]: active
          }
      )}>
        <header>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="../img/logo.png" alt="Logo" />
                    <h3>Bad Bodenteich</h3>
                </div>

                <div className={styles.links}>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#" className={styles.btn}>Sign up</a></li>
                    </ul>
                </div>

                <div className={styles.overlay}></div>

                <div className={styles.hamburgerMenu} onClick={() => setActive(!active)}>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Header;