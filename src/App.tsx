import { useEffect, useState } from 'react';
import { Photo } from './types/types';
import './App.css';

function App() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=4030&api_key=${apiKey}`;
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => setPhotos(response.photos));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>NASA Photos</h1>

            <section>
                <div>
                    {photos?.map((photo) => (
                        <div className="photo" key={photo?.id}>
                            <img src={photo?.img_src} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default App;
