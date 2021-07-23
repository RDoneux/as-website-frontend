import React from 'react'
import MainImage from '../../assets/about-us/About_Us_Main_Image.jpg'
import ExpandableInformation from './ExpandableInformation'
import Styles from './AboutUs.module.css'

interface AboutUsProps {

}

class AboutUs extends React.Component<AboutUsProps> {

    render() {
        return (
            <div className={Styles.container}>
                <img className={Styles.main_image} src={MainImage} alt="" />
                <div className={Styles.information_wrapper}>
                    <ExpandableInformation title="SPECIALISTS" information="A & S Engineering is a Rolls-Royce and Bentley Specialist only working on classic Rolls-Royce and Bentley vehicles. We have extensive experience in all pre and post war classic and vintage Rolls-Royce and Bently cars, from 1900 to 1980, including the Sliver Ghost and the Shadow 2." />
                    <ExpandableInformation title="CUSTOMER FOCUSED" information="A small company that provides a tailor-made service to every clients' requirements. A & S Engineering provide all mechanical restoration work from chassis upwards. Also, bodywork, re-trim work and upholstery work can be carried out by arrangement" />
                    <ExpandableInformation title="EXPERIENCED" information="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Enim eu turpis egestas pretium aenean." />
                </div>
            </div>
        )
    }

}

export default AboutUs