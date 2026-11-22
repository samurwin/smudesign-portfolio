import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './portfolio.css';
import { socialLinksAll } from '../assets/projectInfo'


import Socials from '../components/Socials';

function Portfolio({projects, altitudeApparel, trippyTravel}) {


    return (
        <div className="wrapper">
          <Helmet>
              <title>SMU Designs | Portfolio</title>
          </Helmet>

          <section className="sectionSpacing container max1000 flex-column align-center">
            <h1 className="text-primary text-center milgran">Portfolio</h1>
            <p className="text-secondary text-center my-4">
            Below you can find some of my recent website projects! 
            To see more of my general design work check out my Behance and Dribbble. 
            Similarly, to see source code for my projects check out my GitHub.
            </p>
            <div className="flex-row gapLg align-center">
              <Socials socialLinks={socialLinksAll} />
            </div>
          </section>


          <section className="container sectionSpacing">
            <h3 className="text-secondary text-center">Projects</h3>
            <div className="my-4 flex-row gapLg justify-space-between align-center max1000 mx-auto">
            <Link to={trippyTravel.path} className="projectCard mx-auto cursorPointer">
                  <div
                    className="projectImg"
                    style={{ 
                      backgroundImage: `url(${trippyTravel.bannerImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    >
                  </div>
                </Link>
                <Link to={altitudeApparel.path} className="projectCard mx-auto cursorPointer">
                  <div
                    className="projectImg"
                    style={{ 
                      backgroundImage: `url(${altitudeApparel.bannerImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    >
                  </div>
                </Link>
              {projects.map((project) => (
                  <Link to={project.path} key={project.title} className="projectCard mx-auto cursorPointer">
                    <div
                    className="projectImg"
                    style={{ 
                      backgroundImage: `url(${project.bannerImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    >
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
    );
};

export default Portfolio;