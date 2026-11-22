import { devDiariesImgs, francaisImgs, rwiImgs, altitudeImgs, trippyImgs } from './images';

import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { SiTypescript, SiNextdotjs, SiFigma, SiAdobecreativecloud } from 'react-icons/si'
import { FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const projectInfo = [
    {
        title: "Cahier de Françias",
        subtitle: "French Learning Website",
        tags: [
            "Web Design",
            "Development"
        ],
        bannerImg: francaisImgs.bannerImg,
        overview: "Cahier de Français is a language learning site, which contains reference materials for French grammar. I started learning French using popular apps to practice and learn. After a while I wanted to find more unique ways to improve my French. Working on this website I was able to practice skills in both the French language, as well as several coding languages!",
        link: {
            url: "https://cahier-de-francais.vercel.app/",
            linkTitle: "Deployed Website"
        },
        images: {
            homePage: francaisImgs.homeImgs,
            contentPage: francaisImgs.contentImgs
        },
        technologies: [
            {
                id: 0,
                name: 'React',
                icon: <FaReact color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: "Next.Js",
                icon: <SiNextdotjs color='#d6e0ec' className="techIcon" />
            },
            {
                id: 2,
                name: "Typescript",
                icon: <SiTypescript color='#d6e0ec' className="techIcon" />
            },
            {
                id: 3,
                name: "Figma",
                icon: <SiFigma color='#d6e0ec' className="techIcon" />
            }
        ],
        path: "/portfolio/cahier-de-francais"
    },
    // {
    //     title: 'Alloveus',
    //     subtitle: 'Events and Community',
    //     tags: [
    //         "Web Design",
    //         "Development"
    //     ],
    //     bannerImg: alloveusImgs.bannerImg,
    //     overview: 'ALLOVEUS describes themselves as an artistic wellness community who host events to connect and move with one another. For this project I created the designed the ALLOVEUS website as well as, a custom Shopify theme for the company.',
    //     link: {
    //         url: 'https://alloveus.co',
    //         linkTitle: 'Alloveus.co'
    //     },
    //     images: alloveusImgs.webDesign,
    //     technologies: [
    //         {
    //             id: 0,
    //             name: 'Shopify',
    //             icon: <FaShopify color='#d6e0ec' className="techIcon"/>
    //         },
    //         {
    //             id: 1,
    //             name: 'Adobe CC',
    //             icon: <SiAdobecreativecloud color='#d6e0ec' className="techIcon"/>
    //         }
    //     ],
    //     path: '/portfolio/alloveus'
    // },
    // {
    //     title: 'Savoury Subscriptions',
    //     subtitle: 'Meal-kit Delivery Service',
    //     tags: [
    //         'Development'
    //     ],
    //     bannerImg: savouryImgs.bannerImg,
    //     overview: 'Savoury Subscriptions is a food subscription service where a user can signup/login, pick their favourite meals, and filter them by diet preference. The user can also save their diet preferences on their account page. Once they have their meals chosen, they can checkout using Stripe payment.',
    //     link: {
    //         url: 'https://github.com/ScalexanderB/Savoury-Subscriptions',
    //         linkTitle: 'Github Repo'
    //     },
    //     images: savouryImgs.images,
    //     technologies: [
    //         {
    //             id: 0,
    //             name: 'React',
    //             icon: <FaReact color='#d6e0ec' className="techIcon"/>
    //         },
    //         {
    //             id: 1,
    //             name: 'GraphQL',
    //             icon: <SiGraphql color='#d6e0ec' className="techIcon"/>
    //         },
    //         {
    //             id: 2,
    //             name: 'NodeJS',
    //             icon: <FaNodeJs color='#d6e0ec' className="techIcon"/>
    //         },
    //         {
    //             id: 3,
    //             name: 'MongoDB',
    //             icon: <DiMongodb color='#d6e0ec' className="techIcon"/>
    //         }
    //     ],
    //     path: '/portfolio/savoury-subscriptions'
    // },
    {
        title: 'Dev Diaries',
        subtitle: 'Tech Blog',
        tags: [
            'Development'
        ],
        bannerImg: devDiariesImgs.bannerImg,
        overview: 'Dev Diaries is a tech blog forum. Users with an account can create posts and comment on others people’s posts. Made using TailwindCSS and MySQL/Sequelize.',
        link: {
            url: 'https://cryptic-dusk-52607.herokuapp.com/',
            linkTitle: 'Deployed Website'
        },
        images: devDiariesImgs.images,
        technologies: [
            {
                id: 0,
                name: 'MySQL',
                icon: <DiMysql color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: 'NodeJS',
                icon: <FaNodeJs color='#d6e0ec' className="techIcon"/>
            }
        ],
        path: '/portfolio/dev-diaries'
    },
]

const rwi = {
    title: "RWI Labs",
    subtitle: "Digital Marketing Agency",
    tags: [
        "Web Design",
        "Development",
        "Brand Design",
    ],
    bannerImg: rwiImgs.bannerImg,
    overview: "This project was done for RWI Labs, a Digital Marketing Agency founded by myself and my business partner William. I feature this project as a case study because I believe it perfectly encapsulates all the skills that I have worked on cultivating these last few years. From the logo to the website and everything in between, I poured myself into this project and creating this brand.",
    link:  {
        url: "https://rwilabs.io",
        linkTitle: "RwiLabs.io"
    },
    images : rwiImgs,
    technologies: [
        {
            id: 0,
            name: 'React',
            icon: <FaReact color='#d6e0ec' className="techIcon" />
        },
        {
            id: 1,
            name: 'Typescript',
            icon: <SiTypescript color='#d6e0ec' className="techIcon" />
        },
        {
            id: 2,
            name: 'NextJs',
            icon: <SiNextdotjs color='#d6e0ec' className="techIcon" />
        }
    ],
    path: "/portfolio/rwi-case-study"
}

const altitudeApparel = {
    title: "Altitude Apparel",
    subtitle: "Active Wear Company",
    tags: [
        "Web Design",
        "Brand Design"
    ],
    bannerImg: altitudeImgs.bannerImg,
    overview: "This project was done for Altitude Apparel, a fictional luxury activewear company. I first created the branding, getting inspiration for the logo mark from contour lines seen on topographic maps. I then created an ecommerce website design, with the idea of translating it to a Shopify theme.",
    images: altitudeImgs,
    technologies: [
        {
            id: 0,
            name: 'Adobe CC',
            icon: <SiAdobecreativecloud color='#d6e0ec' className="techIcon"/>
        },
        {
            id: 1,
            name: "Figma",
            icon: <SiFigma color='#d6e0ec' className="techIcon" />
        }
    ],
    path: "/portfolio/altitude-apparel"
}

const trippyTravel = {
    title: "Trippy Travel Planner",
    subtitle: "Travel Planning App",
    tags: [
        "Web Design",
        "Development"
    ],
        link: {
        url: "https://github.com/samurwin/trippy",  
        linkTitle: "Github Repo"
    },
    bannerImg: trippyImgs.bannerImg,
    overview: "Trippy is a web-based travel planning tool that brings research, collaboration, and itinerary building into a single, organized experience. It helps travelers move seamlessly from early inspiration to detailed plans.",
    images: trippyImgs,
    technologies: [
        {
            id: 0,
            name: "Figma",
            icon: <SiFigma color='#d6e0ec' className="techIcon" />
        },
        {
            id: 1,
            name: 'React',
            icon: <FaReact color='#d6e0ec' className="techIcon" />
        },
        {
            id: 2,
            name: 'NextJs',
            icon: <SiNextdotjs color='#d6e0ec' className="techIcon" />
        },
        {
            id: 3,
            name: 'Typescript',
            icon: <SiTypescript color='#d6e0ec' className="techIcon" />
        }
    ],
    path: '/portfolio/trippy-travel-planner'
}

const socialLinksAll = [
    {
      url: 'https://github.com/samurwin',
      key: 'github',
      icon: <FaGithub />
    },
    {
      url: 'https://www.linkedin.com/in/samanthaurwin/',
      key: 'linkedin',
      icon: <FaLinkedinIn />
    },
    {
      url: 'https://www.dribbble.com/smu-design',
      key: 'dribbble',
      icon: <FaDribbble />
    }
  ];


export { projectInfo, socialLinksAll, rwi, altitudeApparel, trippyTravel };