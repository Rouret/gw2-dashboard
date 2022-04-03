import {Recoltes} from "@/constants/Recoltes";

export const RECOLTES_DATA = {
    headers:[
        { text: 'Lieu', value: 'name' },
        { text: 'Waypoint', value: 'waypoint' },
        { text: 'Rewards', value: 'rewards' },
    ],
    items:[
        {
            name:"Champs de la potence",
            waypoint:"[&BGMAAAA=]",
            rewards:[Recoltes.ORES.SILVER,Recoltes.ORES.IRON]
        },
        {
            name:"Théâtre des délices",
            waypoint:"[&BOUGAAA=]",
            rewards:[Recoltes.ORES.MITHRIL]
        },
        {
            name:"Crevasses d'Eautrouble",
            waypoint:"[&BKgCAAA=]",
            rewards:[Recoltes.ORES.MITHRIL]
        },]
}
