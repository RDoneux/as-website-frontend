import React from 'react'
import {withStyles, WithStyles, createStyles} from '@material-ui/styles'

interface GalleryProps extends WithStyles <typeof styles>{

}

class Gallery extends React.Component <GalleryProps> {

    render() {
        return(
            <div>
                GALLERY
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles) (Gallery)