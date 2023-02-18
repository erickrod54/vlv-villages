import { hero } from "./assets/index.assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faClock } from "@fortawesome/free-regular-svg-icons";

/**vlv-villages version 1.16 - data js -
 * Features:
 * 
 *   --> Adding 'name' and 'icond field' 
 *      for BookingIcons.   
 * 
 * Note: in this file will have place all data
 * related with the app
 */

 export const weather = <FontAwesomeIcon icon={faSun} />
 export const time = <FontAwesomeIcon icon={faClock} />

 export const BookingIcons = [
    {
        id:1,
        name:'weather',
        icon:weather,
        temperature:'24',
        url:'#'
    },{
        id:2,
        name:'time',
        icon:time,
        time:'05:00 PM',
        url:'#'
    }
]

export const Images = [
    {   
        id: 1,
        img: hero
    },
]

export const mainNavLinks = [
    {
        id:1,
        linkname:'home'
    },
    {
        id:2,
        linkname:'villas'
    },
    {
        id:3,
        linkname:'about'
    },
    {
        id:4,
        linkname:'contact'
    },
]
