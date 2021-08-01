import { Link, Button } from '@material-ui/core'
import React from 'react'
import { isNonNullExpression } from 'typescript'
import Styles from './Overlay.module.css'

interface OverlayProps {
    hidden?: boolean,
    loaded: boolean
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
        if (this.props.loaded) {
            return (<div></div>)
        }
        return (
            <div className={Styles.container}>
                <div className={this.state.hidden ? Styles.wrapper_hidden : Styles.wrapper_shown}>
                    <Button
                        href={'http://www.motortradeindex.co.uk/'}
                        target="_blank"
                        className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                    >
                        <p
                            className={Styles.link_text}
                        >
                            MOTOR TRADE INDEX
                        </p>
                    </Button>
                    <Button
                        className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                        href={'/find-us'}
                    >
                        <p
                            className={Styles.link_text}
                        >
                            FIND US
                        </p>
                    </Button>
                    <Button
                        className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                        href={'/contact'}
                    >
                        <p
                            className={Styles.link_text}
                        >
                            CONTACT US
                        </p>
                    </Button>
                    <Button
                        style={{
                            position: 'relative',
                            opacity: this.state.hidden ? '0%' : '100%',
                            transition: 'opacity 2s',
                        }}

                        disableRipple
                        onClick={() => { this.toggleHidden() }}
                    >
                        <p
                            className={Styles.link_shown}
                        >
                            {">>"}
                        </p>
                    </Button>
                    <Button
                        style={{
                            position: 'absolute',
                            maxWidth: '4vw',
                            minWidth: '4vw',
                            height: '50vh',
                            opacity: this.state.hidden ? '100%' : '0%',
                            transition: 'opacity 1s',
                        }}

                        disableRipple
                        onClick={() => { this.toggleHidden() }}
                    >
                        <p
                            className={Styles.toggle_hidden}
                        >
                            {"<<"}
                        </p>
                    </Button>

                </div>
            </div>
        )
    }
}

export default Overlay