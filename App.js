import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Navigation from './Components/Navigation/Navigation'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'


const history = createBrowserHistory()

export default function App() {

  return (
    <>
    <Navigation history={history}/>
    <div style={{
      display: 'block',
      marginTop: '5px',
      backgroundColor: '#ff1717',
      color: '#fff',
      fontSize: '1.25rem',
      height: '2.25rem',
      lineHeight: '2.25rem',
      width: '3.5rem',
      opacity: '1',
      borderRadius: '10px',
      textAlign: 'center',
      boxSizing: 'inherit',
      cursor: 'pointer'
    }}>
      <a href="google.com">google</a>
    </div>
    <Router history={history}>
      <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    </>
  )
}
