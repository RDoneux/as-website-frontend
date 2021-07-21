import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import Logo from '../../../assets/A&SEngineeringLogo.png'

interface TitleBarProps extends WithStyles<typeof styles> {

}

class TitleBar extends React.Component<TitleBarProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <img className={classes.logo} src={Logo} alt="" height={'60px'} />
                <div className={classes.detail_wrapper}>
                    <p className={classes.email}>Email: paulbrown888@btinternet.com</p>
                    <p className={classes.tel}>Tel: 01420 541257</p>
                </div>
            </div>
        )
    }

}

const styles = createStyles({
    container: {
        background: 'black',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        alignSelf: 'center',
        marginLeft: '20px',
    },
    detail_wrapper: {
        display:'flex',
        flexDirection: 'column',
        marginRight: '20px',
        justifyContent: 'center',
    },
    email: {
        color: '#dabd47',
        fontSize: '20px',
        marginBottom: '5px',
        alignSelf: 'flex-end'
    },
    tel: {
        marginTop: '0px',
        color: '#dabd47',
        fontSize: '20px',
        alignSelf: 'flex-end'

    }
})

export default withStyles(styles)(TitleBar)