import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
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
            <Route path="/new" component={StreamCreate} />
            <Route path="/edit" component={StreamEdit} />
            <Route path="/delete" component={StreamDelete} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
