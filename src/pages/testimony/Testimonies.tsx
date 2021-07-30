import React from 'react'
import { testimony } from '../../assets/data-structures/DataStructures'
import Styles from './testimonies.module.css'
import data from '../../assets/temp/TempTestimonies.json'
import TestimonyEntry from './TestimonyEntry'


interface TestimoniesProps {

}
class Testimonies extends React.Component<TestimoniesProps> {
    render() {
        const testimonies: testimony[] = data
        return (
            <div className={Styles.container}>

                {testimonies.map((testimony: testimony, i) => (
                    <TestimonyEntry
                        key={i}
                        testimony={testimony}
                    />
                ))}

            </div>

        )
    }

}

export default Testimonies