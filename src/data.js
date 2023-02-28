import { hero, villa1, villa2, villa3, villa4, villa5, villa6 } from "./assets/index.assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faClock, faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";

/**vlv-villages version 2.18 - data js -
 * Features:
 * 
 *   --> Building 'galleryCarrouselData'.   
 * 
 * Note: this data with the background will
 * be use in the style component for the
 * villas image background
 */

 export const arrowLeft = <FontAwesomeIcon icon={faCaretSquareLeft} />
 export const arrowRight = <FontAwesomeIcon icon={faCaretSquareRight} />

 export const galleryCarrouselData = [
    {
        id:1,
        icon:arrowLeft
    },
    {
        id:2,
        icon:arrowRight
    }
]

export const  GalleryTextTitle = ' Gallery';

export const EventsTextTitle = 'Events';

export const MottoData = [
    {
        id:1,
        title:'We Imagine Luxury'
    },
    {
        id:2,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse'
    }
]

 export const villasBackgorunds = [
    {
        id:1,
        image:villa1    
    },
    {
        id:2,
        image:villa2    
    },
    {
        id:1,
        image:villa3    
    },
    {
        id:1,
        image:villa4    
    },
    {
        id:1,
        image:villa5    
    },
    {
        id:1,
        image:villa6    
    
    }
 ]

export const villasData = [
    {
        id:1,
        villaname:'Standard Villa',
        price:'Starting at $200',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse'
    },
    {
        id:2,
        villaname:'Superior Villa',
        price:'Starting at $350',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
    },
    {
        id:3,
        villaname:'Infinity Villa',
        price:'Starting at $700',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
    },
    {
        id:4,
        villaname:'Ultra Villa',
        price:'Starting at 1100.00',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
    },
    {
        id:5,
        villaname:'Galactic Villa',
        price:'Starting at $1300.00',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
    },
    {
        id:6,
        villaname:'Cosmic Villa',
        price:'Starting at $1500.00',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo. Leo vel orci porta non pulvinar neque laoreet suspendisse.'
    },
]            
export const BookingDateData = [
    {
        id:1,
        title:'Arrival',
        month:'May',
        day:'09'
    },
    {
        id:2,
        title:'Departure',
        month:'May',
        day:'23'
    },
    {
        id:3,
        title:'Guests',
        guestnumber:'01',
    },
    {
        id:4,
        title:'Make a Reservation',
        phonetitle:'Reservation Hotline',
        phone:'+1-5263-8965-6547',
        reservation:'Reservation Assistance Available 24 hours'
    },
]

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
