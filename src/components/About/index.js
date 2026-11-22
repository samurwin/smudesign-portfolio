import React, { useEffect } from 'react';
import { scrollTrigger } from '../../utils/helpers'
import "./style.css"

import aboutImg from "../../assets/images/sam-urwin-ui-designer-front-end-developer.jpeg";

export default function About () {

    useEffect(() => {
        scrollTrigger('.aboutCon', {
        rootMargin: '-10px'
        });
    }, []);

    return (
        <section className="aboutWrapper sectionSpacing">
            <div className="container aboutCon max1000">
                <div className="aboutImg">
                    <img
                    src={aboutImg}
                    alt="Samantha Urwin Web Developer and UI Designer"
                    />
                </div>
                <div className="aboutTxt">
                    <h2 className="text-primary">A designer with a creative heart and a strategic mind.</h2>
                    <p className="mb-3">
                        I'm a web designer and developer with 5+ years of experience taking digital products from concept to launch. 
                        I manage the full product lifecycle from initial wireframes and visual design through front-end development and post-launch analytics. I make decisions at every stage of the process, using measurable outcomes and data to guide what gets built, what gets refined, and what gets cut.
                    </p>
                    <p className="mb-3">
                        I've been fortunate to have roles where I get to wear a few different hats. I like that I can sit in a design review, jump into a codebase, and then pull up an analytics dashboard and feel comfortable in all three.</p>
                    <p>
                         I pick up new tools and technologies quickly, which has kept me adaptable as the web continues to evolve. And because I understand both the design and development sides of a project, I tend to be the person who helps bridge the two, translating ideas into practical solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}