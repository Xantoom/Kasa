import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import "../styles/components/banner.scss";

export default function Banner() {

    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about')
            setAboutPage(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={aboutPage ? 'banner__about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    );
};
