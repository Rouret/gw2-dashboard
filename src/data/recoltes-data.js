import {Recoltes} from "@/constants/Recoltes";
import champ_de_la_potence from '@/assets/recolte/champ_de_la_potence.png'
import crevasses_d_eautrouble from '@/assets/recolte/crevasses_d_eautrouble.png'
export const RECOLTES_DATA = {
    headers:[
        { text: 'Lieu', value: 'name' },
        { text: 'Waypoint', value: 'waypoint' },
        { text: 'Rewards', value: 'rewards' },
        { text: 'Image', value: 'img' },
    ],
    items:[
        {
            name:"Champs de la potence",
            waypoint:"[&BGMAAAA=]",
            rewards:[Recoltes.ORES.SILVER,Recoltes.ORES.IRON],
            img:champ_de_la_potence
        },
        {
            name:"Crevasses d'Eautrouble",
            waypoint:"[&BKgCAAA=]",
            rewards:[Recoltes.ORES.MITHRIL],
            img:crevasses_d_eautrouble
        },
    ]
}
