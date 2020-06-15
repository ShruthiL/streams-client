import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from "./Header"

const App = props => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={StreamList} />
            <Route path="/show" component={StreamShow} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
