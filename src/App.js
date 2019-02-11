import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Top from './pages/top/Top'
import About from './pages/about/About'
import Member from './pages/member/Member'
import Works from './pages/works/Works'
import Contact from './pages/contact/Contact'
import Sponsor from './pages/sponsor/Sponsor'

// component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Top />
          <About />
          <Member />
          <Works />
          <Switch>
            <Route path={'/'} component={Contact}/>
          </Switch>
          <Sponsor />
        </div>
      </BrowserRouter>
    )
  }
}
// export
export default App
