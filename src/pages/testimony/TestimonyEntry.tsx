import React from 'react';
import { testimony } from '../../assets/data-structures/DataStructures';
import Styles from './testimony_entry.module.css'
import LoadingPlaceHolder from '../../assets/testimonies/imageIcon.png'

interface TestimonyEntryProps {
    testimony: testimony
}

interface TestimonyEntryState {
    loading: boolean
}

class TestimonyEntry extends React.Component<TestimonyEntryProps, TestimonyEntryState> {

    constructor(props: TestimonyEntryProps) {
        super(props)
        this.state = {
            loading: true
        }
    }

    render() {
        const testimony = this.props.testimony
        const loading = this.state.loading
        return (
            <div className={Styles.container}>
                <div className={Styles.image_wrapper}>
                    <img
                        className={(loading) ? Styles.image_loading : Styles.image_loaded}
                        loading="lazy"
                        src={testimony.image_url}
                        onLoad={() => { this.setState({ loading: false }) }}
                        alt={testimony.id}
                    />
                </div>
                <div>
                    <h2 className={Styles.heading}>{testimony.author}</h2>
                    <p className={Styles.paragraph}>"{testimony.text}" - {testimony.date}</p>
                </div>

            </div>
        )
    }

}

export default TestimonyEntry