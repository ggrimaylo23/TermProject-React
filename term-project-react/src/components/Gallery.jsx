import cali from '../assets/gallery/cali.jpg'
import cowsEire from '../assets/gallery/cows-eire.jpg'
import bohs from '../assets/gallery/des-kelly.jpg'
import diego from '../assets/gallery/diego.jpg'
import futbol from '../assets/gallery/futbol.jpg'
import tuxedo from '../assets/gallery/tuxedo.jpg'

export default function Gallery() {
    const photosDict = new Map([
        ['california', cali],
        ['ireland', cowsEire],
        ['bohemians', bohs],
        ['maradona', diego],
        ['soccer', futbol],
        ['sunglasses', tuxedo]
    ])
    
    return (
        <div>
            <h1>Photo Gallery</h1>

            <div className="photo-grid">
                {
                    Array.from(photosDict, ([photoName, variableName]) => (
                        <img
                            key={photoName}
                            src={variableName}
                            alt={photoName}
                            className="gallery-image"
                        />
                    ))
                }

               


            </div>
        </div>
    )
}