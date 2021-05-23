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
                            <img src="/assets/svg/altdashboard.svg" alt="" />
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
                                        <img src="/assets/svg/file.svg" alt="" />
                                    </div>
                                    <div className='prop-details'>
                                        <h4>Powerful dashboard</h4>
                                        <div>Combine multiple reports into a single beautiful dashboard.</div>
                                    </div>
                                </div>
                                <div className='prop'>
                                    <div className='prop-icon'>
                                        <img src="/assets/svg/sync.svg" alt="" />
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
                                <img src="/assets/svg/slack.svg" alt="ffsd" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/hubspot.svg" alt="ffsd" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/square.svg" alt="ffsd" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/servicetitan.svg" alt="ffsd" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/cogniant.svg" alt="ffsd" />
                            </div>
                            <div className="sponsor">
                                <img src="/assets/svg/grubhub.svg" alt="ffsd" />
                            </div>
                        </div>
                        <div className='testimonals'>

                            <div className="testimonal">
                                <img className="shopify" src="/assets/svg/shopify.svg" alt="ffsd" />
                                <span className='testimonal-text'>I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.</span>
                                <img src="/assets/svg/people1.svg" alt="Testimonal Image" />
                                <span className='testimonal-name'>Harold Tyler</span>
                            </div>
                            <div className="testimonal">
                                <img src="/assets/svg/airbnb.svg" alt="ffsd" />
                                <span className='testimonal-text'>My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.</span>
                                <img src="/assets/svg/people2.svg" alt="ffsd" />
                                <span className='testimonal-name'>Ryan Holmes</span>
                            </div>
                        </div>
                        <div className='all-testimonal'>
                            See All Testimonal <img src="/assets/svg/next.svg" alt="ffsd" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;

