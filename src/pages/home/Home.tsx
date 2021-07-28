import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import ImageSlider from './ImageSlider'
import images from '../../assets/temp/TempImages.json'


interface HomeProps extends WithStyles<typeof styles> {

}

class Home extends React.Component<HomeProps> {

    render() {
        return (
            <div>
                <ImageSlider changeDelay={5000} images={images} />
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles)(Home)