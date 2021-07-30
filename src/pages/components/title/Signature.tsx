import { Link } from '@material-ui/core'
import React from 'react'
import Styles from './Signature.module.css'

interface SignatureProps {

}

class Signature extends React.Component<SignatureProps> {

    render() {
        return (
            <Link className={Styles.container} href="/find-us" underline='none' >
                <p className={Styles.contents}>1 Weyside Park, Newman Lane, Alton, Hampshire, GU34 2PJ</p>
            </Link>
        )
    }

}

export default Signature