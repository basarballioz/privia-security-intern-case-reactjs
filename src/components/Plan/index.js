import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


function Plan({ data, active }) {

    return (
        <>
          <div style={{ color: data.color }} className={`plans-option ${data.bg} ${active ? 'active' : ''}`}>
            <div className="plans-option-content">
                <div className="plans-option-title">
                    <h2 style={{ color: data.priceColor }}>${data.price}</h2>
                    <div>/month</div>
                </div>
                <div className="plans-option-type">{data.type} </div>
                <div className="plans-option-desc">
                    {data.desc}
                </div>
                <hr></hr>
                <ul>
                  {
                    data.features.map((feature, index) => {
                      return (
                        <li key={index}>
                          <img src="/assets/svg/check.svg" alt="Check Icon" />
                          <span>
                              {feature.desc}
                          </span>
                        </li>
                      );
                    })
                  }
                </ul>
            </div>
            
            <button className="plans-option-start-button">Start free trial</button>
          </div>

        </>
    )
}

export default Plan;