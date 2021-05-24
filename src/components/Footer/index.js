import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles["logo-area"]}>
            <div className={styles["logo-social"]}>
              <img src="/assets/svg/logo.svg" alt="Privia Logo" />
              <div className={styles["social-media"]}>
                <img src="/assets/svg/twitter.svg" alt="Twitter Logo" />
                <img src="/assets/svg/facebook.svg" alt="Facebook Logo" />
                <img src="/assets/svg/linkedin.svg" alt="Linkedin Logo" />
              </div>
            </div>

            <div className={styles.copyright}>
              &copy; 2021 Privia
            </div>
          </div>
          <div className={styles["content-area"]}>
            <div className={styles["content"]}>
              <h2>Product</h2>
              <ul>
                <li>
                  <Link>Landing Page</Link>
                </li>
                <li>
                  <Link>Features</Link>
                </li>
                <li>
                  <Link>Documentation</Link>
                </li>
                <li>
                  <Link>Referral Program</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className={styles["content"]}>
              <h2>Services</h2>
              <ul>
                <li>
                  <Link>Documentation</Link>
                </li>
                <li>
                  <Link>Desing</Link>
                </li>
                <li>
                  <Link>Themes</Link>
                </li>
                <li>
                  <Link>Illustration</Link>
                </li>
                <li>
                  <Link>UI Kit</Link>
                </li>
              </ul>
            </div>
            <div className={styles["content"]}>
              <h2>Company</h2>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Terms</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Carers</Link>
                </li>
              </ul>
            </div>
            <div className={styles["content"]}>
              <h2>More</h2>
              <ul>
                <li>
                  <Link>Documentation</Link>
                </li>
                <li>
                  <Link>Licence</Link>
                </li>
                <li>
                  <Link>Changelog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
