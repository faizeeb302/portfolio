import React from 'react';
import style from './projects.module.css';
import Card from '../../components/card/card';
import quizpic from "../../static/images/quizpic.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
    const projectData =
    {
        name: 'Project One',
        description: 'A web application to manage tasks efficiently.',
        technologies: 'React, Node.js, MongoDB',
        techDescription: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and efficiently manage the state of an application. React uses a virtual DOM for optimal performance, enabling fast rendering of components when data changes. Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to run JavaScript on the server side. It is widely used for building scalable network applications due to its non-blocking, event-driven architecture. Node.js is ideal for creating REST APIs, handling asynchronous operations, and real-time applications like chat apps. MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling large-scale data and quickly evolving schemas. Unlike traditional relational databases, MongoDB is schema-less, meaning you can store data without predefined structures, which offers flexibility for application development. It is widely used in modern web applications due to its scalability and ease of use with JavaScript-based tech stacks like Node.js.",
        link: '#',
        src: quizpic
    }


    return (
        <div className={style.container}>
            <div className={style.image}>
                <Card >
                    <img src={projectData.src} />
                </Card>
            </div>
            <div className={style.content}>
                <h1>{projectData.name}</h1>
                <p>{projectData.description}</p>
                <p>{projectData.techDescription}</p>
                <a href="https://github.com/CIS-3344-fall24/AdnanZahid-project-MileStone1" target='_blank' className={style.btn}>
               <span>Project</span> 
            <IoIosArrowRoundForward fontSize={34}/>
                </a>

            </div>
        </div>
    );
};

export default Projects;
