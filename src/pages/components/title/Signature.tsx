import React from 'react'
import Styles from './Signature.module.css'

interface SignatureProps {

}

class Signature extends React.Component<SignatureProps> {

    render() {
        return (
            <div className={Styles.container}>
                <p className={Styles.contents}>1 Weyside Park, Newman Lane, Alton, Hampshire, GU34 2PJ</p>
            </div>
        )
    }

}

export default Signature