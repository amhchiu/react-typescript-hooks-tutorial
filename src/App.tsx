import React from 'react';
import './App.css';
import { Store } from './Store';
import { IChampion, IAction } from './interfaces';

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

    console.log(state)
    return (
        <div className="App">
            <header className="header">
                <h1>Select a card...</h1>
            </header>
            <section className="champion-layout">
                {Object.keys(state.champions).map((championName: string, i: number) => {
                    let championObj = state.champions[championName];
                    let squareImgAsset = `http://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/${championObj.image.full}`
                    let fav = state.favourites.find((fav: IChampion) => fav.id === championObj.id ) ? { background: 'yellow' } : { background: 'white' }
                    return (
                        <section key={championObj.id} className="champion-box">
                            <img src={squareImgAsset} alt={championObj.name} />
                            <div>{championObj.name}</div>
                            <section>
                                <div>{championObj.title}</div>
                                <button type="button" style={fav} onClick={() => toggleFavAction(championObj)}>
                                    Fav
                                </button>
                            </section>
                        </section>
                    );
                })}
            </section>
        </div>
    );
}

export default App;
