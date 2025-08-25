
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
           <ul>
            <li>
                <NavLink className={({isActive})=>isActive? "active-item": "pending-item"} to= "/">home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive? "active-item": "pending-item"}  to ="/about">About</NavLink>
            </li>
           </ul>
        </div>
    )
}

export default Menu