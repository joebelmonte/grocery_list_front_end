import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import ListsIndex from './components/lists_index'
import ListsNew from './components/lists_new'
import ListsShow from './components/lists_show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/lists/new" component={ListsNew} />
        <Route path="/lists/:id" component={ListsShow} />
        <Route path="/" component={ListsIndex} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
