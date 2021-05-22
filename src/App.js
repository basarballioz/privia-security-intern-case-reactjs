import React, { Suspense, lazy } from 'react'
import './styles/index.scss'
import Home from './pages/Home'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Suspense fallback={<div> Loading... </div>}>
        <Header />
        <main>
          <Home />
          
        </main>

      </Suspense>

    </>
  );
}

export default App;

