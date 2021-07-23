import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import NavigationLink from './NavigationButton'
import Styles from './NavigationBar.module.css'

interface NavigationBarProps extends React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {
}

class NavgationBar extends React.Component<NavigationBarProps> {

    render() {
        const currentPage = this.props.location.pathname
        return (
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    <NavigationLink title="HOME" path="/" selected={currentPage === "/"} />
                    <NavigationLink title="ABOUT US" path="/about-us" selected={currentPage === "/about-us"} />
                    <NavigationLink title="GALLERY" path="/gallery" selected={currentPage === "/gallery"} />
                    <NavigationLink title="TESTIMONIES" path="/testimonies" selected={currentPage === "/testimonies"} />
                    <NavigationLink title="CONTACT" path="/contact" selected={currentPage === "/contact"} />
                </div>
            </div>
        )
    }

}

export default NavgationBar