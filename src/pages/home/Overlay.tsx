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
                            style={{ fontSize: '1vw' }}
                        >
                            MOTOR TRADE INDEX
                        </p>
                    </Button>
                    <Button
                        className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                        href={'/find-us'}
                    >
                        <p
                            style={{ fontSize: '1vw' }}
                        >
                            FIND US
                        </p>
                    </Button>
                    <Button
                        className={this.state.hidden ? Styles.link_hidden : Styles.link_shown}
                        href={'/contact'}
                    >
                        <p
                            style={{ fontSize: '1vw' }}
                        >
                            CONTACT US
                        </p>
                    </Button>
                    <Button
                        style={{
                            position: 'relative',
                            width: '100%',
                            opacity: this.state.hidden ? '0%' : '100%',
                            transition: '800ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'
                        }}

                        disableRipple
                        onClick={() => { this.toggleHidden() }}
                    >
                        <p
                            className={Styles.link_shown}
                        >
                            {(this.state.hidden) ? "<<" : ">>"}
                        </p>
                    </Button>
                    <Button
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '50vh',
                            opacity: this.state.hidden ? '100%' : '0%',
                            transition: '800ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
                            
                        }}

                        disableRipple
                        onClick={() => { this.toggleHidden() }}
                    >
                        <p
                            className={Styles.toggle_hidden}
                        >
                            {(this.state.hidden) ? "<<" : ">>"}
                        </p>
                    </Button>

                </div>
            </div>
        )
    }
}

export default Overlay