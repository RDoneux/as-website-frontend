import React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import MainImage from '../../assets/about-us/About_Us_Main_Image.jpg'
import ExpandableInformation from './ExpandableInformation'

interface AboutUsProps extends WithStyles<typeof styles> {

}

class AboutUs extends React.Component<AboutUsProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <img className={classes.main_image} src={MainImage} alt="" />
                <div className={classes.information_wrapper}>
                    <ExpandableInformation />
                    <ExpandableInformation />
                    <ExpandableInformation />
                </div>
            </div>
        )
    }

}

const styles = createStyles({

    container: {
        display: 'flex',
        //flexGrow: 1,
        height: '100%',
        background: 'red',
    },

    main_image: {
        margin: '20px',
        height: '75%',
        alignSelf: 'flex-start',
    },

    information_wrapper: {
        background: 'red',
        width: '100%',
        height: '75%',
        margin: '20px',
        alignSelf: 'flex-start  ',
    }

})

export default withStyles(styles)(AboutUs)