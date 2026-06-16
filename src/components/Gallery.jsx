import cali from '../assets/gallery/cali.jpg'
import cowsEire from '../assets/gallery/cows-eire.jpg'
import bohs from '../assets/gallery/des-kelly.jpg'
import diego from '../assets/gallery/diego.jpg'
import futbol from '../assets/gallery/futbol.jpg'
import tuxedo from '../assets/gallery/tuxedo.jpg'

//use a map DS to store the photos for the gallery because map high-order function requires a key
//and it's easy to have a key in the map as the string name of the image
export default function Gallery() {
    const photosDict = new Map([
        ['california', cali],
        ['ireland', cowsEire],
        ['bohemians', bohs],
        ['maradona', diego],
        ['soccer', futbol],
        ['sunglasses', tuxedo]
    ])

    //array.from() creates an array from what we pass in, so we can now use the map function on it
    //take each photoName and image (from the map) and generate an image for our photo gallery
    return (
        <div>
            <h1 className="gallery-title">Photo Gallery</h1>

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