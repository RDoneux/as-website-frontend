import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import { Link } from '@material-ui/core'

interface NavigationButtonProps extends WithStyles<typeof styles> {
    title: string
    path: string
    selected: boolean
    seperator: boolean
}

class NavigationButton extends React.Component<NavigationButtonProps> {

    render() {
        const classes = this.props.classes
        return (
            <Link
                style={{
                    marginLeft: '8px',
                    marginRight: '0px',
                    paddingRight: '10px',
                    marginTop: '0px',
                    marginBottom: '0px',
                    justifyContent: 'flex-start',
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '2vh',
                    borderRight: this.props.seperator ? '1px solid black' : '0px solid black',
                }}
                href={this.props.path}
                className={(this.props.selected ? classes.selected : classes.unselected)}
            >
                {this.props.title}
            </Link>
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