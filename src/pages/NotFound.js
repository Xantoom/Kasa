import {Link} from "react-router-dom";
import '../styles/pages/notFound.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <div>
                <div className="not-found">
                    <div className="not-found__content">
                        <h2 className={"not-found__content__title"}>404</h2>
                        <p className={"not-found__content_sub-content"}>Oups! La page que vous demandez n'existe pas.</p>
                    </div>
                    <Link to={'/'} className="not-found__link">Retourner sur la page d’accueil</Link>
                </div>
            </div>
            <Footer />
        </>
    );
};
