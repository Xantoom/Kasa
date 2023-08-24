import Arrow from '../assets/chevron_up.png';
import {useState} from 'react';
import '../styles/components/collapser.scss';

export default function Collapser({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse__title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'arrow arrow__up' : 'arrow arrow__down'}
                        src={Arrow}
                        alt="show content"
                    />
                </h3>
                <div className={toggle ? 'collapse__content' : 'collapse__content__hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (<p key={index}>{item}</p>)
                    }) : content }
                </div>
            </div>
        </>
    );
};
