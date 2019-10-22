import React from 'react';
import { IChampion } from './interfaces';

const ChampionList = (props: any): React.ReactElement[] => {
    const { champions, toggleFavAction, favourites, store } = props;
    const { state, dispatch } = store;
    return (
        Object.keys(champions).map((championName: string, i: number) => {
            let championObj = champions[championName];
            let squareImgAsset = `http://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/${championObj.image.full}`
            let fav = favourites.find((fav: IChampion) => fav.id === championObj.id) ? { background: 'yellow' } : { background: 'white' }
            return (
                <section key={championObj.id} className="champion-box">
                    <img src={squareImgAsset} alt={championObj.name} />
                    <div>{championObj.name}</div>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>{championObj.title}</div>
                        <button type="button" style={fav} onClick={() => toggleFavAction(state, dispatch, championObj)}>
                            Fav
                        </button>
                    </section>
                </section>
            );
        })
    );
};

export default ChampionList;