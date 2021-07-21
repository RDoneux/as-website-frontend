import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import { RouteComponentProps } from 'react-router-dom'
import NavigationLink from './NavigationButton'

interface NavigationBarProps extends WithStyles<typeof styles>, React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {
}

class NavgationBar extends React.Component<NavigationBarProps> {

    render() {
        const classes = this.props.classes
        const currentPage = this.props.location.pathname
        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <NavigationLink title="HOME" path="/" selected={currentPage === "/"}/>
                    <NavigationLink title="ABOUT US" path="/about-us" selected={currentPage === "/about-us"}/>
                    <NavigationLink title="GALLERY" path="/gallery" selected={currentPage === "/gallery"}/>
                    <NavigationLink title="TESTIMONIES" path="/testimonies" selected={currentPage === "/testimonies"}/>
                    <NavigationLink title="CONTACT" path="/contact" selected={currentPage === "/contact"}/>
                </div>
            </div>
        )
    }

}

const styles = createStyles({

    container: {
        background: '#c5c2c2',
        height: '50px',
        boxShadow: '1px 1px 10px black',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    wrapper: {
        alignSelf: 'center',
        marginRight: '20px',
    }

})

export default withStyles(styles)(NavgationBar)