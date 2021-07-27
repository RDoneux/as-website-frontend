import React from 'react'
import styles from '../about/ExpandableInformation.module.css'

interface ExpandableInformationProps {
    title: string
    information: string
    showDelay: number
}

interface ExpandableInformationState {
    showing: boolean
}

class ExpandableInformation extends React.Component<ExpandableInformationProps, ExpandableInformationState> {

    constructor(props: ExpandableInformationProps) {
        super(props)
        this.state = ({
            showing: false
        })
        if (this.props.showDelay > 0) {
            setTimeout(() => { this.setState({ showing: true }) }, this.props.showDelay)
        }
    }

    handleClick() {
        this.setState({
            showing: !this.state.showing
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.showing ? styles.content_showing : styles.content} onClick={() => { this.handleClick() }}>
                    <div className={styles.information}>
                        <p>{this.props.information}</p>
                    </div>
                    <div className={styles.title}>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpandableInformation

