import { Link } from 'react-router-dom';
import '../../styles/components/Header/navbar.scss';

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className={currentRoute === '/' ? 'navbar__list__item__active' : 'navbar__list__item'}>
                    <Link to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'navbar__list__item__active' : 'navbar__list__item'}>
                    <Link to='/about'>
                        À propos
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
