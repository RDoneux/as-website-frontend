import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

interface NavigationButtonProps extends WithStyles<typeof styles> {
    title: string
    path: string
    selected: boolean
}

class NavigationButton extends React.Component<NavigationButtonProps> {

    render() {
        const classes = this.props.classes
        return (
            <Button disableRipple={true} href={this.props.path} style={{ margin: '8px' }} className={(this.props.selected ? classes.selected : classes.unselected)} >
                {this.props.title}
            </Button>
        )
    }

}

const styles = createStyles({
    selected: {
        fontWeight: 'bold',
    },
    unselected: {}
})

export default withStyles(styles)(NavigationButton)