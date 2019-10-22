import React from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const ChampionList = React.lazy<any>(() => import('./ChampionList'));

const FavouritesPage = (): React.ReactElement => {
    const { state, dispatch } = React.useContext(Store);

    const props = {
        champions: state.favourites,
        store: {state, dispatch},
        toggleFavAction,
        favourites: state.favourites
    };

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className="champion-layout">
                <ChampionList {...props} />
            </div>
        </React.Suspense>
    );
};

export default FavouritesPage;