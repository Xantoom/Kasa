import datas from '../data';
import Card from './Card';
import '../styles/components/gallery.scss';

export default function Gallery() {

    return (
        <main className='home__gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    );
};
