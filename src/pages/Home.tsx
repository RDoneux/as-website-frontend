import React from 'react'
import {withStyles, WithStyles, createStyles} from '@material-ui/styles'

interface HomeProps extends WithStyles <typeof styles> {

}

class Home extends React.Component <HomeProps> {

    render() {
        return (
            <div>
                HOME
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles (styles) (Home)