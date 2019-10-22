import React from 'react';
import './App.css';
import { Store } from './Store';
import { IChampion, IAction } from './interfaces';

const ChampionList = React.lazy<any>(() => import('./ChampionList'));

const App: React.FC = () => {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        console.log('run once');
        Object.entries(state.champions).length === 0 && fetchDataAction(); // double ampersand same as if statement
    }, [state]);

    const fetchDataAction = async () => {
        const URL = 'http://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion.json';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({ type: 'FETCH_DATA', payload: dataJSON.data });
    };

    const toggleFavAction = (champion: IChampion): IAction => {
        const championInFav = state.favourites.includes(champion);
        let dispatchObj = {
            type: 'ADD_FAV',
            payload: champion
        };
        if (championInFav) {
            const favWithoutChampion = state.favourites.filter((fav: IChampion) => fav.id !== champion.id);
            dispatchObj = {
                type: 'REMOVE_FAV',
                payload: favWithoutChampion
            }
        }
        return dispatch(dispatchObj)
    }
    
    interface IChampionProps {
        champions: {
            [key: string]: IChampion
        },
        toggleFavAction: (champion: IChampion) => IAction,
        favourites: Array<IChampion>
    };

    const props: IChampionProps = {
        champions: state.champions,
        toggleFavAction,
        favourites: state.favourites
    };


    return (
        <div className="App">
            <header className="header">
                <h1>Select a card...</h1>
                <p>Favourites: {state.favourites.length}</p>
            </header>
            <React.Suspense fallback={<div>Loading...</div>}>
                <section className="champion-layout">
                    <ChampionList {...props} />
                </section>
            </React.Suspense>
        </div>
    );
}

export default App;
