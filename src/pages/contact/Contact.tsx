import { TextField } from '@material-ui/core'
import React from 'react'
import Styles from './contact.module.css'
import Submit from './Submit'

interface ContactProps {

}

class Contact extends React.Component<ContactProps> {

    render() {
        return (
            <div className={Styles.container}>
                <p
                    className={Styles.title}
                >
                    Please complete the form below and we will be in contact as soon as we can. <br /> <br />
                    Alternitively you can call or email us directly using the details above
                </p>
                <form action="/action_page.php" className={Styles.form} noValidate autoComplete="on">
                    <div style={{ height: '5vh' }} />
                    <TextField label="Name" variant="outlined" />
                    <div style={{ height: '20px' }} />
                    <TextField label="Email Address" variant="outlined" />
                    <div style={{ height: '20px' }} />
                    <TextField label="Query" size={'small'} multiline minRows={7} variant="outlined" />
                </form>
                <Submit />
            </div>
        )
    }
}

export default Contact