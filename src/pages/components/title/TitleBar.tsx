import React from 'react'
import Logo from '../../../assets/A&SEngineeringLogo.png'
import Styles from './TitleBar.module.css'

interface TitleBarProps {

}

class TitleBar extends React.Component<TitleBarProps> {

    render() {
        return (
            <div className={Styles.container}>
                <img className={Styles.logo} src={Logo} alt="" />
                <div className={Styles.detail_wrapper}>
                    <p className={Styles.email}>Email: paulbrown888@btinternet.com</p>
                    <p className={Styles.tel}>Tel: 01420 541257</p>
                </div>
            </div>
        )
    }

}

export default TitleBar