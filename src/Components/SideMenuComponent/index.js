import './styles.css'
import { HOME_SVG } from './images'
import { EXPLORE_SVG } from './images'
import { NOTIFICATIONS_SVG } from './images'
import { MESSAGES_SVG } from './images'
import { BOOKMARKS_SVG } from './images'
import MenuItem from './MenuItem'



export default function SideMenu() {
    const menu = [
        { 
            icon: HOME_SVG,
            name: 'Home'
        },
        { 
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        { 
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        { 
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        { 
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
    ]


    return (
        <div className='w-25 mt-3 mx-5'>
            <img src={require('./images/Twitter-logo.svg.png')} className='logo-icon mb-2' />

            {menu.map((item, index) => <MenuItem item={ item } key={ index } />)}
        </div>
    )
}