import {Link} from 'react-router-dom';
import '../styles/components/card.scss';

export default function Card({id, title, cover}) {

    return (
        <Link to={`/accommodation/${id}`} className="gallery__card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    );
};
