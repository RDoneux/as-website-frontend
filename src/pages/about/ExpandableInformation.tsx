import React from 'react'
import styles from  '../about/ExpandableInformation.module.css'

interface ExpandableInformationProps {

}

class ExpandableInformation extends React.Component <ExpandableInformationProps> {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>

                </div>
            </div>
        )
    }
}

export default ExpandableInformation

