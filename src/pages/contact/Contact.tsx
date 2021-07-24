import React from 'react'
import {withStyles, WithStyles, createStyles} from '@material-ui/styles'

interface ContactProps extends WithStyles <typeof styles>{

}

class Contact extends React.Component <ContactProps> {

    render() {
        return(
            <div>
                CONTACT
            </div>
        )
    }

}

const styles = createStyles({

})

export default withStyles(styles) (Contact)