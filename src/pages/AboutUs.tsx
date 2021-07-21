import React from 'react'
import {withStyles, WithStyles, createStyles} from '@material-ui/styles'

interface AboutUsProps extends WithStyles <typeof styles>{

}

class AboutUs extends React.Component <AboutUsProps> {

    render() {
        return(
            <div>
                ABOUT US
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles) (AboutUs)