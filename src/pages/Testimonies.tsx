import React from 'react'
import {withStyles, WithStyles, createStyles} from '@material-ui/styles'

interface TestimoniesProps extends WithStyles <typeof styles>{

}

class Testimonies extends React.Component <TestimoniesProps> {

    render() {
        return(
            <div>
                TESTIMONIES
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles) (Testimonies)