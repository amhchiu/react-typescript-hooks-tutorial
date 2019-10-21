/**
 *  All the interfaces
 */

export interface IChampion {
    version: string,
    id: string,
    key: string,
    name: string,
    title: string,
    blurb: string,
    info: {
        attack: number,
        defense: number,
        magic: number,
        difficulty: number
    },
    image: {
        full: string,
        sprite: string,
        group: string,
        x: number,
        y: number,
        w: number,
        h: number
    },
    tags: string[],
    partype: string,
    stats: {
        hp: number,
        hpperlevel: number,
        mp: number,
        mpperlevel: number,
        movespeed: number,
        armor: number,
        armorperlevel: number,
        spellblock: number,
        spellblockperlevel: number,
        attackrange: number,
        hpregen: number,
        hpregenperlevel: number,
        mpregen: number,
        mpregenperlevel: number,
        crit: number,
        critperlevel: number,
        attackdamage: number,
        attackdamageperlevel: number,
        attackspeedperlevel: number,
        attackspeed: number
    }
};

// [] assumes empty array has length 0; therefore use Array<any> generic
export interface IState {
    champions: {
        [key: string]: IChampion
    },
    favourites: Array<any>
};

export interface IAction {
    type: string,
    payload: any
}
