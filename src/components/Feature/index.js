import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Feature.module.scss';

const Feature = ({ feature }) => {
    return (
        <>
            <div className={styles.feature}>
                <div className={styles.icon}>
                    <div className={styles['icon-bg']}>
                        <img src={feature.iconbg} alt="" />
                    </div>
                    <div className={styles['icon-shape']}>
                        <img src={feature.icon} alt="" />
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles['info-title']}>{feature.title}</div>
                    <div className={styles['info-description']}>{feature.desc}</div>
                    <div className={styles['info-learn-more']}>
                        <Link to={feature.href}>
                            Learn More <img src="/assets/svg/next.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
