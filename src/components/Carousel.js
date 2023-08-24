import ArrowRight from '../assets/chevron_right.png';
import ArrowLeft from '../assets/chevron_left.png';
import { useState } from 'react';
import '../styles/components/carousel.scss';

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && (
                <>
                    <img
                        className='carousel__arrow carousel__arrow__right'
                        src={ArrowRight}
                        alt="next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className='carousel__arrow carousel__arrow__left'
                        src={ArrowLeft}
                        alt="previous slider"
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>)
            }
        </section>
    );
};
