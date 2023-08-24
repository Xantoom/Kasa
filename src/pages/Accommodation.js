import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from '../data';
import Slider from "../components/Carousel";
import Collapser from '../components/Collapser';
import StarGrey from '../assets/star_grey.png';
import StarRed from '..//assets/star_red.png';
import '../styles/pages/accommodation.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Accommodation() {

    const [imageSlider, setImageSlider] = useState([]);

    const accommodationId = useParams('id').id;
    const dataCurrentAccommodation = datas.filter(data => data.id === accommodationId);

    useEffect(() => {
        const dataCurrentAccommodation = datas.filter(data => data.id === accommodationId);
        setImageSlider(dataCurrentAccommodation[0].pictures);
    }, [accommodationId]);

    const name = dataCurrentAccommodation[0].host.name.split(' ');
    const rating = dataCurrentAccommodation[0].rating;
    const description  = dataCurrentAccommodation[0].description;
    const equipments = dataCurrentAccommodation[0].equipments;

    return (
        <>
            <Header />
            <Slider imageSlider={imageSlider}/>
            <main className="accommodation">
                <div className="accommodation__content">
                    <div className="accommodation__content__infos">
                        <h1>{dataCurrentAccommodation[0].title}</h1>
                        <p>{dataCurrentAccommodation[0].location}</p>
                        <div>
                            {dataCurrentAccommodation[0].tags.map((tag, index) => {
                                return (
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="accommodation__content__host">
                        <div>
                            <div className='accommodation__content__host__name'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataCurrentAccommodation[0].host.picture} alt="host of this accommodation" />
                        </div>

                        <div className="accommodation__content__host__stars">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img key={index} src={ratingValue <= rating ? StarRed : StarGrey} alt="star" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="accommodation__collapser">
                    <div className="accommodation__collapser__item">
                        <Collapser title={'Description'} content={description} />
                    </div>
                    <div className="accommodation__collapser__item">
                        <Collapser title={'Équipements'} content={equipments}/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
