import React from 'react'
import { image } from '../../assets/data-structures/DataStructures'
import Styles from './ImageSlider.module.css'
import Overlay from './Overlay'

interface ImageSliderProps {
    changeDelay: number
    images: image[]
}

interface ImageSliderState {
    index: number
    loaded: boolean
}

class ImageSlider extends React.Component<ImageSliderProps, ImageSliderState> {

    constructor(props: ImageSliderProps) {
        super(props)
        this.state = {
            index: 0,
            loaded: false
        }

        if (this.props.changeDelay > 0) {
            setTimeout(() => { this.advanceSlide() }, this.props.changeDelay)
        }
    }

    componentDidMount() {
        this.props.images.forEach((picture) => {
            const img = new Image();
            img.src = picture.image_url;
        });
    }

    advanceSlide() {
        this.setState({
            index: (this.state.index < this.props.images.length - 1) ? this.state.index + 1 : 0

        })
        setTimeout(() => { this.advanceSlide() }, this.props.changeDelay)
    }

    render() {

        return (
            <div>
                <div className={(this.state.loaded) ? Styles.container_loaded : Styles.container_loading}>
                    <div className={Styles.wrapper}>
                        {this.props.images.map((image: image, i) => (
                            <img
                                className={Styles.image}
                                key={i}
                                style={{
                                    transform: `translateX(-${(this.state.index * 100)
                                        }%)`
                                }}
                                src={image.image_url}
                                alt=""
                                onLoad={() => { this.setState({ loaded: true }) }}
                            />
                        ))}
                        <Overlay hidden={false} loaded={!this.state.loaded} />
                    </div>
                </div>
            </div>
        )
    }

}

export default ImageSlider