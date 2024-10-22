import React from 'react';
import style from "./about.module.css"
import Card from '../../components/card/card';
import pic1 from "../../static/images/pic1.jpeg"

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
                <Card >
                    <img className={style.image} src={pic1} />
                    <h3>Web Developer</h3>
                </Card>
            </div>
            <div className={style.paragraphContainer}>
                <p>
                    Albert Einstein was one of the most influential physicists of the 20th century, best known for developing the theory of relativity. His work revolutionized the understanding of space, time, and energy, challenging the classical physics established by Isaac Newton.
                </p>
                <p>
                    Born in 1879 in Ulm, Germany, Einstein showed an early interest in mathematics and science, though he struggled in the rigid educational system of his time. His curiosity and unconventional thinking set him apart from his peers, and he often explored ideas on his own.
                </p>
                <p>
                    One of Einstein’s most famous contributions is the equation E=mc², which expresses the equivalence of mass and energy. This equation laid the foundation for much of modern physics and had significant implications in both theoretical science and practical applications, such as nuclear energy.
                </p>
                <p>
                    Beyond his scientific achievements, Einstein was also a passionate advocate for civil rights and pacifism. He used his fame to speak out against fascism and racism, and he supported the cause of Zionism. Despite his immense intellectual legacy, Einstein was known for his humility and a deep sense of responsibility toward humanity.
                </p>
            </div>
        </div>
    )

}

export default About;