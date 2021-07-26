import { TextField } from '@material-ui/core'
import React from 'react'
import Styles from './contact.module.css'

interface ContactProps {

}

class Contact extends React.Component<ContactProps> {

    render() {
        return (
            <div className={Styles.container}>
                <p
                    className={Styles.title}
                >
                    Please complete the form below and we will be in contact as soon as we can. <br /> <br /> Alternitively you can call or email us directly using the details above 
                </p>
                <form action="/action_page.php" className={Styles.form} noValidate autoComplete="on">
                    <div style={{ height: '5vh' }} />
                    <TextField className={Styles.textfield} label="Name" variant="outlined" />
                    <div style={{ height: '20px' }} />
                    <TextField className={Styles.textfield} label="Email Address" variant="outlined" />
                    <div style={{ height: '20px' }} />
                    <TextField className={Styles.textfield_query} label="Query" size={'small'} multiline minRows={7} variant="outlined" />
                </form>
            </div>
        )
    }
}

export default Contact