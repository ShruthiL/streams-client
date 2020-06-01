import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StreamList} />
        <Route path="/show" component={StreamShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
