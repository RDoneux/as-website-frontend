import React from 'react'
import Styles from './Signature.module.css'

interface SignatureProps {

}

class Signature extends React.Component<SignatureProps> {

    render() {
        return (
            <p className={Styles.contents}>1 Weyside Park, Newman Lane, Alton, Hampshire, GU34 2PJ</p>
        )
    }

}

export default Signature