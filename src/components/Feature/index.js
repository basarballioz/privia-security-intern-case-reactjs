import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Feature.module.scss";

const Feature = ({ feature, more }) => {
  return (
    <>
      <div className={more ? styles['more-feature'] : styles.feature}>
        <div className={more ? styles['more-icon'] : styles.icon}>
          <div className={more ? styles['more-icon-bg'] : styles["icon-bg"]}>
            <img src={feature.iconbg} alt="" />
          </div>
          <div className={more ? styles['more-icon-shape'] : styles["icon-shape"]}>
            <img src={feature.icon} alt="" />
          </div>
        </div>
        <div className={more ? styles['more-info'] : styles.info}>
          <div className={more ? styles['more-info-title'] : styles["info-title"]}>{feature.title}</div>
          <div className={more ? styles['more-info-description'] : styles["info-description"]}>{feature.desc}</div>

          {more ? null : (
            <div className={more ? styles['more-info-learn-more'] : styles["info-learn-more"]}>
              <Link to={feature.href}>
                Learn More <img src="/assets/svg/next.svg" alt="" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Feature;
