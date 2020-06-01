import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import StreamList from './streams/StreamList';

const App = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={StreamList} />
    </BrowserRouter>
  )
}

export default App
