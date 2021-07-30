import React from 'react'
import { testimony } from '../../assets/data-structures/DataStructures'
import data from '../../assets/temp/TempTestimonies.json'
import Styles from './testimonies.module.css'
import TestimonyEntry from './TestimonyEntry'


interface TestimoniesProps {

}

interface TestimonyEntryState {
    loading: boolean
}

class Testimonies extends React.Component<TestimoniesProps, TestimonyEntryState> {

    constructor(props: TestimoniesProps) {
        super(props)
        this.state = {
            loading: true
        }
    }

    render() {
        const testimonies: testimony[] = data
        const loading = this.state.loading
        return (
            <div>
                {testimonies.map((testimony: testimony, i) => (
                    <div className={Styles.container}>
                        <div className={Styles.image_wrapper}>
                            <img
                                style={{ objectFit: 'cover' }}
                                className={(loading) ? Styles.image_loading : Styles.image_loaded}
                                loading="lazy"
                                src={testimony.image_url}
                                onLoad={() => { this.setState({ loading: false }) }}
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className={Styles.heading}>{testimony.author}</h2>
                            <p className={Styles.paragraph}>"{testimony.text}" - {testimony.date}</p>
                        </div>
                    </div>
                ))}
                {/* {testimonies.map((testimony: testimony, i) => (
                    <TestimonyEntry
                        key={i}
                        testimony={testimony}
                    />
                ))} */}



            </div>

        )
    }

}

export default Testimonies