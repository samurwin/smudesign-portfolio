import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper'
// import Swiper styles
import 'swiper/css';
import "./style.css";

import { trippyTravel, altitudeApparel } from '../../assets/projectInfo'
import { Link } from 'react-router-dom'

export default function CaseStudies() {

    const featuredProjects = [
        {
            projectInfo: trippyTravel,
            link: '/portfolio/trippy-travel-planner'
        },
        {
            projectInfo: altitudeApparel,
            link: '/portfolio/altitude-apparel'
        } 
        
    ];

    return (
        <section className="caseStudies mt-5">
                <Swiper
                    slidesPerView={1.4}
                    spaceBetween={0}
                    breakpoints={{
                        500:{
                            spaceBetween: 40
                        },

                        640:{
                            spaceBetween: 56
                        },

                        768:{
                            spaceBetween: 72
                        },

                        992:{
                            spaceBetween: 80,
                            slidesPerView: 2
                        }
                        
                    }}
                >
                    {featuredProjects.map(project => (
                        <SwiperSlide key={project.projectInfo.title}>
                            <Link to={project.link}>
                                <img
                                    src={project.projectInfo.bannerImg}
                                    alt={`${project.projectInfo.title} project banner`}
                                    className="slideImg"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </section>
    )
}