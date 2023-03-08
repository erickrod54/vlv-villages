import { gallery1, gallery10, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, hero, villa1, villa2, villa3, villa4, villa5, villa6 } from "./assets/index.assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faClock, faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";

/**vlv-villages version 3.17 - data js -
 * Features:
 * 
 *   --> Building 'testimonialsData'.   
 * 
 * Note: this data will be rendered in all
 * the cards.
 */

 export const testimonialsData = [
    {
        id:1,
        title:'clark lois',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:2,
        title:'tony stark',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:3,
        title:'hope pym',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:4,
        title:'amanda waller',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:5,
        title:'steve rogers',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:6,
        title:'black widow',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

 export const FeaturesTextTitle = 'Features';

 export const galleryCarrouselImages = [
    {
        id:1,
        image:gallery1
    },
    {
        id:2,
        image:gallery2
    },
    {
        id:3,
        image:gallery3
    },
    {
        id:4,
        image:gallery4
    },
    {
        id:5,
        image:gallery5
    },
    {
        id:6,
        image:gallery6
    },
    {
        id:7,
        image:gallery7
    },
    {
        id:8,
        image:gallery8
    },
    {
        id:9,
        image:gallery9
    },
    {
        id:10,
        image:gallery10
    }
]

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
