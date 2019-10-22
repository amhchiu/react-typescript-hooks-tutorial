import React from 'react';
import './App.css';
import { Store } from './Store';
import { Link } from 'react-router-dom';

const App: React.FC = (props: any) => {
    const { state } = React.useContext(Store);

    return (
        <div className="App">
            <header className="header">
                <h1>Select a card...</h1>
                <Link to='/'>Home</Link>
                <Link to='/Favourites'>Favourites: {state.favourites.length}</Link>
            </header>
            {props.children}
        </div>
    );
}

export default App;
