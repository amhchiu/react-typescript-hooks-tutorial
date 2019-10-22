import React from 'react';
import { IChampionProps } from './interfaces';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const ChampionList = React.lazy<any>(() => import('./ChampionList'));

const HomePage = () => {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        console.log('run once');
        Object.entries(state.champions).length === 0 && fetchDataAction(dispatch); // double ampersand same as if statement
    }, [state]);

    const props: IChampionProps = {
        champions: state.champions,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <section className="champion-layout">
                    <ChampionList {...props} />
                </section>
            </React.Suspense>
        </div>
    );
};

export default HomePage;