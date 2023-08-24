import Logo from '../../assets/logo.png';
import Navbar from './Navbar';
import "../../styles/components/Header/header.scss";

export default function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="Kasa, Appartements, Locations" />
            </h1>
            <Navbar />
        </header>
    );
};
