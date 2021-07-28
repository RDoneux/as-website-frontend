import React from 'react'
import { image } from '../../assets/data-structures/DataStructures'
import Styles from './ImageSlider.module.css'

interface ImageSliderProps {
    changeDelay: number
    images: image[]
}

interface ImageSliderState {
    index: number
}

class ImageSlider extends React.Component<ImageSliderProps, ImageSliderState> {

    constructor(props: ImageSliderProps) {
        super(props)
        this.state = {
            index: 0
        }
        if (this.props.changeDelay > 0) {
            setTimeout(() => { this.advanceSlide() }, this.props.changeDelay)
        }
    }

    advanceSlide() {
        this.setState({
            index: (this.state.index < this.props.images.length) ? this.state.index + 1 : 0

        })
        setTimeout(() => { this.advanceSlide() }, this.props.changeDelay)
    }

    render() {
        return (
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    {this.props.images.map((image: image) => (
                        <img className={Styles.image} style={{
                            transform: `translateX(-${(this.state.index * 100)
                                }%)`
                        }} src={image.image_url} alt="" />
                    ))}
                </div>
            </div>
        )
    }

}

export default ImageSlider