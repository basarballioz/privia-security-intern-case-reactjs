import React, { useState, useEffect } from 'react'
import Feature from '../components/Feature';
import Plan from '../components/Plan';

function Home() {

    const [activePlan, setActivePlan] = useState(0);

    const [plans, setPlans] = useState([
        {
            price: 22,
            priceColor: '#EDB300',
            color: 'black',
            desc: 'All the basics for businesses that are just getting started.',
            type: 'Standart',
            bg: 'standart-bg',
            features: [
                { desc: 'Single project use' },
                { desc: 'Basic dashboard' },
                { desc: 'All components included' }
            ]
        },
        {
            price: 99,
            priceColor: '#49A4FF',
            color: 'black',
            desc: 'Better for growing businesses that want more customers.',
            type: 'Essential',
            bg: 'essentials-bg',
            features: [
                { desc: 'Unlimited project use' },
                { desc: 'Advanced dashboard' },
                { desc: 'All components included' },
                { desc: 'Advanced insight' },
            ]
        },
        {
            price: 139,
            priceColor: 'white',
            color: 'white',
            desc: 'All the basics for businesses that are just getting started.',
            type: 'Premium',
            bg: 'premium-bg',
            features: [
                { desc: 'Unlimited project use' },
                { desc: 'Advanced dashboard' },
                { desc: 'All components included' },
                { desc: 'Advanced insight' },
            ]
        }
    ]);

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
    ]);

    const [moreFeatures, setMoreFeatures] = useState([
        {
            iconbg: '/assets/svg/bluebg.svg',
            title: 'Easy customization',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/bluebg.svg',
            title: 'Secure and fast',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/bluebg.svg',
            title: 'Powerful dashboard',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/yellowbg.svg',
            title: 'Cloud upload',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/yellowbg.svg',
            title: 'Proven Technology',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
        {
            iconbg: '/assets/svg/yellowbg.svg',
            title: '98.99% satisfaction',
            desc: 'No matter what kind of home you have to share, you can increase your earnings.',
            href: '/'
        },
    ]);



    useEffect(() => {
        console.log(activePlan);
        return () => { };
    }, []);

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
                                        <Feature more={false} feature={feature} key={index} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
                <section id='analytics'>
                    <div className='container'>
                        <div className='analytics-image'>
                            <img src="/assets/svg/altdashboard.svg" alt="Alt Dashboard" />
                        </div>
                        <div className='analytics-detail'>
                            <div className='section-title'>
                                <img src="/assets/svg/tire.svg" alt="Analytics Dash" />
                                <span>Analytics</span>
                            </div>
                            <div className='title'>
                                <h2>Analyze your data with our analyze tools</h2>
                                <div>Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</div>
                            </div>
                            <div className='props'>
                                <div className='prop'>
                                    <div className='prop-icon'>
                                        <img src="/assets/svg/file.svg" alt="File Icon" />
                                    </div>
                                    <div className='prop-details'>
                                        <h4>Powerful dashboard</h4>
                                        <div>Combine multiple reports into a single beautiful dashboard.</div>
                                    </div>
                                </div>
                                <div className='prop'>
                                    <div className='prop-icon'>
                                        <img src="/assets/svg/sync.svg" alt="Sync Icon" />
                                    </div>
                                    <div className='prop-details'>
                                        <h4>Always in Sync</h4>
                                        <div>Don’t worry about the data, always be synchronized</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='more-features'>
                    <div className="container">
                        <div className='section-title'>
                            <img src="/assets/svg/tire.svg" alt="More Features Dash" />
                            <span>More Features</span>
                        </div>
                        <div className="more-features-title">
                            <h2>We're more than an analytic tool. Explore our features, and satisfy your customers</h2>
                        </div>
                        <div className='more-features'>
                            {
                                moreFeatures.map((moreFeature, index) => {
                                    return (
                                        <Feature more feature={moreFeature} key={index} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
                <section id='collab'>
                    <div className="container">
                        <div className='collab-image'>
                            <img src="/assets/svg/people.svg" alt="Collaborate Image" />
                        </div>
                        <div className='collab-detail'>
                            <div className='section-title'>
                                <img src="/assets/svg/tire.svg" alt="Analytics Dash" />
                                <span>Collaborate</span>
                            </div>
                            <div className='title'>
                                <h2>Collaborate with your team anytime, anywhere</h2>
                                <div>Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</div>
                            </div>
                            <div className="collab-checks">
                                <ul>
                                    <li>
                                        <img src="/assets/svg/check.svg" alt="Tick Icon" />
                                        <div>Organize your data</div>
                                    </li>
                                    <li>
                                        <img src="/assets/svg/check.svg" alt="Tick Icon" />
                                        <div>Work with any team</div>
                                    </li>
                                    <li>
                                        <img src="/assets/svg/check.svg" alt="Tick Icon" />
                                        <div>Business analytics</div>
                                    </li>
                                    <li>
                                        <img src="/assets/svg/check.svg" alt="Tick Icon" />
                                        <div>Always in sync</div>
                                    </li>
                                    <li>
                                        <img src="/assets/svg/check.svg" alt="Tick Icon" />
                                        <div>Embedded analytics</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sponsors">
                    <div className="container">
                        <div className='sponsor-desc'>
                            <h4>More than 1.8 million people across 50,000 companies choose Oval</h4>
                        </div>

                        <div className="sponsors">
                            <div className="sponsor">
                                <img src="/assets/svg/slack.svg" alt="Slack Icon" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/hubspot.svg" alt="Hubspot Icon" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/square.svg" alt="Square Icon" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/servicetitan.svg" alt="Servicetitan Icon" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/cogniant.svg" alt="Cogniant Icon" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/grubhub.svg" alt="Grubhub Icon" />
                            </div>
                        </div>
                        <div className='testimonals'>

                            <div className="testimonal">
                                <img className="brand-img" src="/assets/svg/shopify.svg" alt="Shopify Icon" />
                                <span className='testimonal-text'>I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.</span>
                                <div className="testimonal-profile">
                                    <img src="/assets/svg/people2.svg" alt="Ryan Holmes Image" />

                                    <div className="testimonal-profile-info">
                                        <div className='testimonal-name'>Ryan Holmes</div>
                                        <div className='testimonal-job'>Motion design / animator</div>
                                    </div>
                                </div>

                            </div>
                            <div className="testimonal">
                                <img className="brand-img" src="/assets/svg/airbnb.svg" alt="Airbnb Icon" />
                                <span className='testimonal-text'>My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.</span>

                                <div className="testimonal-profile">
                                    <img src="/assets/svg/people2.svg" alt="Ryan Holmes Icon" />

                                    <div className="testimonal-profile-info">
                                        <div className='testimonal-name'>Ryan Holmes</div>
                                        <div className='testimonal-job'>Motion design / animator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='all-testimonals'>
                            <div>See All Testimonal</div>
                            <img src="/assets/svg/next.svg" alt="Next Icon" />
                        </div>
                    </div>
                </section>

                <section id="plans">
                    <div className="container">
                        <div className="plans-title-area">
                            <h2>Choose the plan that's right for your business</h2>
                        </div>

                        <div className="plans-desc-area">30-day free trial, cancel any time. No credit card required.</div>
                        <div className="plans-bill-area">
                            <div className="plans-bill-monthly">
                                <span>Bill monthly</span>
                                <div className='switcher'>
                                    <img src="/assets/svg/switcher.svg" alt="Switcher" />
                                </div>
                                <span>Bill anually</span>
                                <div className='save-price'>
                                    <img src="/assets/svg/cizgi.svg" alt="Line SVG" />
                                </div>
                            </div>
                        </div>

                        <div className="plans-choose-area">
                            <div onClick={() => setActivePlan(0)} className="plans-choose-standart">Standart</div>
                            <div onClick={() => setActivePlan(1)} className="plans-choose-essentials">Essentials</div>
                            <div onClick={() => setActivePlan(2)} className="plans-choose-premium">Premium</div>
                        </div>

                        <div className="plans-options-area">
                            {
                                plans.map((plan, index) => {
                                    let active = false;
                                    if (index === activePlan) {
                                        active = true;
                                    } else {
                                        active = false;
                                    }
                                    return (
                                        <Plan active={active} data={plan} key={index} />
                                    );
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

