import React, { Suspense, lazy } from 'react'
import './styles/index.scss'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div> Loading... </div>}>
          <Switch>
            <Header />
            <main>
              <Home />

            </main>
          </Switch>
        </Suspense>
      </Router>


    </>
  );
}

export default App;

