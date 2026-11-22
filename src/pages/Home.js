import React, { useEffect } from 'react';
import './home.css';

import { scrollTrigger } from '../utils/helpers';

import About from "../components/About";
import Button from "../components/Button";
import TechSquare from '../components/TechSquare';
import CaseStudies from '../components/CaseStudies';

import { FaReact, FaShopify, FaNodeJs, FaGitAlt, FaWordpressSimple } from 'react-icons/fa'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { SiTypescript, SiNextdotjs, SiGraphql, SiFigma, SiAdobecreativecloud } from 'react-icons/si'

const technologies = [
    {
        id: 0,
        name: 'React',
        icon: <FaReact color='#d6e0ec' className="techIcon" />
    },
    {
        id: 1,
        name: 'TypeScript',
        icon: <SiTypescript color='#d6e0ec' className="techIcon" />
    },
    {
        id: 2,
        name: 'NextJs',
        icon: <SiNextdotjs color='#d6e0ec' className="techIcon" />
    },
    {
        id: 3,
        name: 'MongoDB',
        icon: <DiMongodb color='#d6e0ec' className="techIcon" />
    },
    {
        id: 4,
        name: 'MySQL',
        icon: <DiMysql color='#d6e0ec' className="techIcon" />
    },
    {
        id: 5,
        name: 'GraphQL',
        icon: <SiGraphql color='#d6e0ec' className="techIcon" />
    },
    {
        id: 6,
        name: 'NodeJS',
        icon: <FaNodeJs color='#d6e0ec' className="techIcon" />
    },
    {
        id: 7,
        name: 'Git',
        icon: <FaGitAlt color='#d6e0ec' className="techIcon" />
    },
    {
        id: 8,
        name: 'Shopify',
        icon: <FaShopify color='#d6e0ec' className="techIcon" />
    },
    {
        id: 9,
        name: 'Wordpress',
        icon: <FaWordpressSimple color='#d6e0ec' className="techIcon" />
    },
    {
        id: 10,
        name: 'Figma',
        icon: <SiFigma color='#d6e0ec' className="techIcon" />
    },
    {
        id: 11,
        name: 'Adobe CC',
        icon: <SiAdobecreativecloud color='#d6e0ec' className="techIcon" />
    }
  ];

function Home() {

    useEffect(() => {
        scrollTrigger('.testimonialCon', {
        rootMargin: '-10px'
        });
    }, []);

    return (
        <div className="wrapper">

        {/* HERO */}
            <section className="container hero">
                <div className="heroTxt">
                    <h1 className="name">Samantha Urwin</h1>
                    <p className="jobTitle">Web Designer & Front-End Developer</p>
                    <div className="mt-3 flex-row flex-wrap gapSm justify-center">
                        <Button color="secondary" text="Get in Touch" link="/contact" location="internal"/>
                        <Button color="primary" text="View Portfolio" link="/portfolio" location="internal" />
                    </div>
                </div>
                <div className="greenStar">
                    <svg id="b" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" 
                    viewBox="0 0 115.88 115.88"><g id="c">
                        <path d="M60.29,20.89L69.73,3.89c1.36-2.44,5.08-1.44,5.03,1.35l-.32,19.44c-.03,
                        2.11,2.26,3.43,4.06,2.35l16.68-10c2.4-1.44,5.12,1.29,3.68,3.68l-10,16.68c-1.08,
                        1.81,.24,4.1,2.35,4.06l19.44-.32c2.79-.05,3.79,3.67,1.35,5.03l-17,9.44c-1.84,
                        1.02-1.84,3.67,0,4.69l17,9.44c2.44,1.36,1.44,5.08-1.35,5.03l-19.44-.32c-2.11-.03-3.43,
                        2.26-2.35,4.06l10,16.68c1.44,2.4-1.29,5.12-3.68,3.68l-16.68-10c-1.81-1.08-4.1,
                        .24-4.06,2.35l.32,19.44c.05,2.79-3.67,3.79-5.03,1.35l-9.44-17c-1.02-1.84-3.67-1.84-4.69,
                        0l-9.44,17c-1.36,2.44-5.08,1.44-5.03-1.35l.32-19.44c.03-2.11-2.26-3.43-4.06-2.35l-16.68,
                        10c-2.4,1.44-5.12-1.29-3.68-3.68l10-16.68c1.08-1.81-.24-4.1-2.35-4.06l-19.44,.32c-2.79,
                        .05-3.79-3.67-1.35-5.03l17-9.44c1.84-1.02,1.84-3.67,0-4.69L3.89,46.15c-2.44-1.36-1.44-5.08,
                        1.35-5.03l19.44,.32c2.11,.03,3.43-2.26,2.35-4.06l-10-16.68c-1.44-2.4,1.29-5.12,3.68-3.68l16.68,
                        10c1.81,1.08,4.1-.24,4.06-2.35l-.32-19.44c-.05-2.79,3.67-3.79,5.03-1.35l9.44,17c1.02,1.84,3.67,
                        1.84,4.69,0Z" fill="none" stroke="#0f7173" strokeMiterlimit="10" strokeWidth="5"/></g>
                    </svg>
                </div>
                <div className="orangeStar">
                    <svg id="b" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" 
                    viewBox="0 0 115.88 115.88"><g id="c">
                        <path d="M60.29,20.89L69.73,3.89c1.36-2.44,5.08-1.44,5.03,1.35l-.32,19.44c-.03,
                        2.11,2.26,3.43,4.06,2.35l16.68-10c2.4-1.44,5.12,1.29,3.68,3.68l-10,16.68c-1.08,
                        1.81,.24,4.1,2.35,4.06l19.44-.32c2.79-.05,3.79,3.67,1.35,5.03l-17,9.44c-1.84,
                        1.02-1.84,3.67,0,4.69l17,9.44c2.44,1.36,1.44,5.08-1.35,5.03l-19.44-.32c-2.11-.03-3.43,
                        2.26-2.35,4.06l10,16.68c1.44,2.4-1.29,5.12-3.68,3.68l-16.68-10c-1.81-1.08-4.1,
                        .24-4.06,2.35l.32,19.44c.05,2.79-3.67,3.79-5.03,1.35l-9.44-17c-1.02-1.84-3.67-1.84-4.69,
                        0l-9.44,17c-1.36,2.44-5.08,1.44-5.03-1.35l.32-19.44c.03-2.11-2.26-3.43-4.06-2.35l-16.68,
                        10c-2.4,1.44-5.12-1.29-3.68-3.68l10-16.68c1.08-1.81-.24-4.1-2.35-4.06l-19.44,.32c-2.79,
                        .05-3.79-3.67-1.35-5.03l17-9.44c1.84-1.02,1.84-3.67,0-4.69L3.89,46.15c-2.44-1.36-1.44-5.08,
                        1.35-5.03l19.44,.32c2.11,.03,3.43-2.26,2.35-4.06l-10-16.68c-1.44-2.4,1.29-5.12,3.68-3.68l16.68,
                        10c1.81,1.08,4.1-.24,4.06-2.35l-.32-19.44c-.05-2.79,3.67-3.79,5.03-1.35l9.44,17c1.02,1.84,3.67,
                        1.84,4.69,0Z" fill="none" stroke="#FFB870" strokeMiterlimit="10" strokeWidth="5"/></g>
                    </svg>
                </div>
            </section>

            {/* ABOUT */}
            <About/>

            {/* FEATURED */}
            <section className="container sectionSpacing">
                <h2 className="text-secondary text-center">Featured Projects</h2>
                <CaseStudies />
            </section>
            
            {/* RESUME */}
            <section className="container sectionSpacing flex-column gapMd align-center">
                {/* Tech Card */}
                <div className="skillsCard">
                    <div className='w-100 mb-3'>
                        <h4 className="cardTitle">Technologies</h4>
                        <div className="line"></div>
                    </div>
                    {/* Tech List */}
                    <div className="techGrid w-100">
                        {technologies.map((tech) => (
                                <TechSquare 
                                key={tech.id}
                                tech={{
                                    id: tech.id,
                                    name: tech.name,
                                    icon: tech.icon
                                }} />
                        ))}
                    </div>
                </div>

                {/* Education Card */}
                <div className="skillsCard">
                    <div className='w-100 mb-3'>
                        <h4 className="cardTitle">Education</h4>
                        <div className="line"></div>
                    </div>

                    <div className='eduCon'>
                        <div>
                            <p className='text-secondary semibold'>Certificate in Full Stack Development</p>
                            <p className='text-secondary italic'>University of Toronto SCS</p>
                        </div>

                        <div>
                            <p className='text-secondary semibold'>Diploma in Advertising and Graphic Design</p>
                            <p className='text-secondary italic'>Humber College</p>
                        </div>
                    </div>

                </div>

                <Button color="secondary" text="My Resume" link="https://drive.google.com/file/d/15ZleeMF2vIjqQu0kYqthmbodDE1fcbLd/view?usp=sharing"/>
            </section>

            <section className="container sectionSpacing">
                <h2 className="text-secondary text-center">Client Testimonial</h2>

                <div className="testimonialCon">
                    <div className="testimonial">
                        <p>
                            “Samantha supported the entire project of building the website for my company from start to finish. She carefully listened to all of my requests 
                            and fully brought this idea to life. From the design to the development of the site, she was able to craft the website to my liking. It is 
                            efficient and easy to use, with easy access to input information so I can shift its presentation as my company evolves. As I felt adjustments 
                            needed to be made, she was on it every time, tweaking the features I requested in a timely manner. She even went above and beyond to provide me 
                            with some valuable information about using Shopify to further support my company.”
                        </p>
                        <h3 className="text-primary mt-4">Alexandra Vesia</h3>
                        <p className="italic">Alloveus</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;