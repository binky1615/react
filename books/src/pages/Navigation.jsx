import {Link, Outlet} from 'react-router-dom'

const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul>
                
                <li>
                    <Link to='/home'>home</Link>
                </li>
                <li>
                <Link to='/about'>about</Link>
                </li>
                <li>
                <Link to='/contact'>contact</Link>
                </li>

            </ul>
        </nav>

        <Outlet/>
        </>
     );
}
 
export default Navigation;