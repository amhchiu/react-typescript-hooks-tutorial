import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreProvider from './Store';
import { BrowserRouter as Router, Switch, Route, RouteProps } from 'react-router-dom';
import HomePage from './HomePage';
import FavouritesPage from './FavouritesPage';

import * as serviceWorker from './serviceWorker';

const RouterPage = (props: { pageComponent: React.ReactElement } & RouteProps) => props.pageComponent;

ReactDOM.render(
    <StoreProvider>
        <Router>
            <Switch>
                <App>
                    {/* <RouterPage pageComponent={<HomePage />} exact path='/' />
                    <RouterPage pageComponent={<FavouritesPage />} exact path='/Favourites' /> */}
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/Favourites' component={FavouritesPage} />
                </App>
            </Switch>
        </Router>
    </StoreProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
