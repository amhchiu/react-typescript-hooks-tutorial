import { IAction, IChampion, IState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
    const URL = 'http://ddragon.leagueoflegends.com/cdn/9.20.1/data/en_US/champion.json';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({ type: 'FETCH_DATA', payload: dataJSON.data });
};

export const toggleFavAction = (state: IState, dispatch: any, champion: IChampion | any): IAction => {
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
};