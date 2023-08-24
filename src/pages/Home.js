import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../styles/pages/home.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <div className={"home"}>
                <Banner />
                <Gallery />
            </div>
            <Footer />
        </>
    );
}
