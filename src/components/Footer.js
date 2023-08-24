import Logo from '../assets/logo_footer.png';
import '../styles/components/footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="Kasa, Locations, Appartements" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};
