import React, { useState } from 'react'
import Feature from '../components/Feature'

function Home() {

    const [features, setFeatures] = useState([
        {
            iconbg: '/assets/svg/yellowbg.svg',
            icon: '/assets/svg/piechart.svg',
            title: 'Analyze your data',
            desc: 'Create reports with an easy to use drag-and-drop designer.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/yellowbg.svg',
            icon: '/assets/svg/shield.svg',
            title: 'Analyze your data',
            desc: 'Create reports with an easy to use drag-and-drop designer.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/bluebg.svg',
            icon: '/assets/svg/graph.svg',
            title: 'Analyze your data',
            desc: 'Create reports with an easy to use drag-and-drop designer.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/touch.svg',
            title: 'Analyze your data',
            desc: 'Create reports with an easy to use drag-and-drop designer.',
            href: '/'
        }
    ])

    return (
        <>
            <main>
                <section id="introduction">
                    <img src="/assets/svg/background.svg" className='home-background' alt="Privia Background Image" />
                    <h1>Powerfull analytics tools for your business</h1>
                    <p>An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers</p>
                    <div className='trial-buttons'>
                        <button className='primary'>Start free trial</button>
                        <button>View live demo</button>
                    </div>
                    <div className='dashboard'>
                        <img src="/assets/svg/dashboard.svg" alt="Privia Dashboard Image" />
                    </div>
                </section>
                <section id='features'>
                    <div className='container'>
                        <div className='section-title'>
                            <img src="/assets/svg/tire.svg" alt="Features Dash" />
                            <span>Features</span>
                        </div>
                        <div className='title'>
                            <h2>Our solution for your business</h2>
                            <span>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</span>
                        </div>
                        <div className='features'>
                            {
                                features.map((feature, index) => {
                                    return (
                                        <Feature feature={feature} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;


