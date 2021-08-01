import { Link, Button } from '@material-ui/core'
import React from 'react'
import { isNonNullExpression } from 'typescript'
import Styles from './Overlay.module.css'

interface OverlayProps {
    hidden?: boolean
}

interface OverlayState {
    hidden: boolean
}

class Overlay extends React.Component<OverlayProps, OverlayState> {

    constructor(props: OverlayProps) {
        super(props)
        this.state = {
            hidden: this.props.hidden ?? false
        }
    }

    toggleHidden() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        return (
            <div className={Styles.container}>
                <div className={this.state.hidden ? Styles.wrapper_hidden : Styles.wrapper_shown}>
                    <Button
                        href={'http://www.motortradeindex.co.uk/'}
                        target="_blank"
                    >
                        <p
                            className={Styles.link_shown}
                        >
                            LISTED IN THE MOTOR TRADE INDEX
                        </p>
                    </Button>
                    <Button
                        href={'/find-us'}
                    >
                        <p
                            className={Styles.link_shown}
                        >
                            FIND US
                        </p>
                    </Button>
                    <Button
                        href={'/contact'}
                    >
                        <p
                            className={Styles.link_shown}
                        >
                            CONTACT US
                        </p>
                    </Button>
                    <Button
                        onClick={() => { this.toggleHidden() }}
                    >
                        <p
                            className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                        >{(this.state.hidden) ? "<<" : ">>"}</p>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Overlay