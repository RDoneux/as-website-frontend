import React from 'react'
import Button from '@material-ui/core/Button'
import Styles from './submit.module.css'

interface SubmitProps {

}

class Submit extends React.Component<SubmitProps>{

    render() {
        return (
            <div className={Styles.container}>
                <Button className={Styles.button} variant='contained' >
                    Submit
                </Button>
            </div>
        )
    }

}

export default Submit