import React from 'react'
import ImageSlider from './ImageSlider'
import images from '../../assets/temp/TempImages.json'
import Styles from './Home.module.css'

interface HomeProps {

}

class Home extends React.Component<HomeProps> {

    render() {
        return (
            <div className={Styles.container}>
                <ImageSlider changeDelay={6000} images={images} />
                <h2 className={Styles.header}> Rolls Royce and Bentley Specialists </h2>
                <p className={Styles.text}>A small company that provides a tailor-made service to every clients' requirements, A & S Engineering provide all mechanical restoration work from the chassis upwards.</p>
            </div>
        )
    }

}

export default Home