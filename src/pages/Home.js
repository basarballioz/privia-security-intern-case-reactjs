import React from 'react'

function Home() {

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
                        
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;


