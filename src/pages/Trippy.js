import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import './projects.css';
import './trippy.css';
import ProjectHeading from '../components/ProjectHeading';
import TechSquare from '../components/TechSquare';
import Button from '../components/Button';
import trippyVideo from '../assets/images/trippy/prototype-flow-walkthrough.mp4';

import { trippyTravel } from '../assets/projectInfo';

function Trippy() {

    return(
        <div className="wrapper">
            <Helmet>
                <title>{trippyTravel.title} | SMU Designs</title>
                <meta name="description" content={`Portfolio project ${trippyTravel.title} showcasing Samantha Urwin's work in ${trippyTravel.tags.join(', ')}`}/>
            </Helmet>

            <ProjectHeading title={trippyTravel.title} subtitle={trippyTravel.subtitle} tags={trippyTravel.tags} image={trippyTravel.bannerImg} overview={trippyTravel.overview} link={trippyTravel.link} />

            <section className="container sectionSpacing max800">
                <h2 className="text-primary subheading">Problem & Intent</h2>
                <p className="mt-2 text-light">
                    Travel planning is often fragmented across multiple tools—blogs, maps, bookmarks, spreadsheets, and booking emails which can make it difficult to stay organized. I set out to design a single platform that supports the entire planning journey, from early research and idea gathering to structured itineraries and booking details.
\                </p>

                <h2 className="text-primary subheading mt-5">User & Use Case</h2>
                <h4 className="text-light mt-3">Individual Traveler</h4>
                <p className="mt-2 text-light">
                    The product is designed for travelers who plan trips over multiple sessions and want to stay organized without relying on complex spreadsheets or scattered notes and bookmarks. These users need a flexible system that allows them to save ideas early, gradually add structure, and easily reference itineraries and bookings on the go, particularly on mobile.
                </p>  
            </section>
            <section className="container sectionSpacing max800">
                {/* Feature 01 */}
                <div class="feature-label">Feature 01</div>
                <h1 className="feature-title text-secondary mt-5">Planning your First Itinerary Item</h1>

                 {/* Persona */}
                <div className="persona-strip mt-5">
                    <div className="persona-accent"></div>
                    <div className="persona-body p-4">
                    <div className="persona-eyebrow">Individual Traveller</div>
                    <div className="persona-name">Sarah, 29</div>
                    <div className="persona-desc">Planning a weekend trip to New York City. She knows roughly what she wants: culture, food, a couple of must-see spots, but doesn't yet have a plan. She's used to bouncing between Google Maps, saved Instagram posts, and a notes app. She wants something that holds it all in one place without forcing her to commit to a full schedule upfront.</div>
                    <div className="persona-tags">
                        <span className="tag">Solo traveller</span>
                        <span className="tag">Weekend trip</span>
                        <span className="tag">New York City</span>
                        <span className="tag">First-time user</span>
                    </div>
                    </div>
                </div>  

                <div className="section-divider mt-5">
                    <div className="section-num">01</div>
                    <div className="section-title">User Journey Overview</div>
                    <div className="section-line"></div>
                </div>

                <p className="text-light mt-4">Sarah arrives at Trippy with a destination in mind but no structure. The flow takes her from setup through exploration to her first itinerary item.</p>

                 <div className="journey-timeline m-5">
                    <div className="journey-steps">
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">1</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Trip setup</div>
                        <div className="journey-step-text">Sarah starts her trip, sets New York City as her destination, and picks her arrival and departure dates for the weekend.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">2</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Explore page loads</div>
                        <div className="journey-step-text">Her trip is created. She lands on a personalized Explore page. A trip header at the top, category tiles and a search bar ready below.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">3</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Browsing attractions</div>
                        <div className="journey-step-text">Sarah taps Attractions. A curated list of popular spots near New York City populates. She scans, reads a little, and finds something she wants to do.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">4</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Opening the Place Details</div>
                        <div className="journey-step-text">Sarah taps on a place to view its details. A detailed view appears with more information about the attraction, including links, contact info, and location.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">5</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Reading Reviews</div>
                        <div className="journey-step-text">Sarah taps 'Read Reviews'. She can now see reviews from online sources and filter them by rating, or date.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">6</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Adding to Itinerary</div>
                        <div className="journey-step-text">She taps 'Add to itinerary'. A modal appears, she picks Single day, selects Saturday, sets a time, and optionally adds a note.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">7</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Confirmation</div>
                        <div className="journey-step-text">A confirmation modal tells her the item was added. She can go straight to her itinerary, or close and keep exploring.</div>
                        </div>
                    </div>
                    <div className="journey-step m-2">
                        <div className="journey-step-left">
                        <div className="journey-step-circle">8</div>
                        <div className="journey-step-line"></div>
                        </div>
                        <div className="journey-step-content">
                        <div className="journey-step-title">Itinerary view</div>
                        <div className="journey-step-text">The itinerary shows her weekend day by day. Her first item sits under Saturday. Location details, time, her note, and space for documents all visible at a glance.</div>
                        </div>
                    </div>
                    </div>
                </div>


            {/* User Flow Walkthrough */}

            <div className="section-divider">
                <div className="section-num">02</div>
                <div className="section-title">User Flow Walkthrough</div>
                <div className="section-line"></div>
            </div>
            
            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 1</span>
                <span className="frame-name">Trip setup — entering the key details</span>
                </div>
                <div className="frame-body">
                <h3>Sarah starts her trip</h3>
                <p>
                    Before any exploration can happen, Trippy needs just enough information to make the Explore page useful: a destination, a name, and a date range. The setup screen is intentionally minimal. 
                </p>
                <p>
                    The form fields are ordered by how Sarah naturally thinks about a trip: where first, then when. Date fields use a calendar picker scoped to future dates, with the end date automatically unlocking once a start date is selected.
                </p>
            
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[0].img} alt={trippyTravel.images.wireframes[0].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 1 — Start page</div>
                </div>
            
                <div className="decision-box">
                    <div className="decision-label">Design decision</div>
                    <p className="decision-text">The setup form was intentionally kept to three fields. Earlier explorations included a trip type selector (city break, hiking, beach) and a group size input at this stage — both were cut. That context is useful for personalisation later, but it added cognitive load to a moment when the user just wants to get started. The Explore page itself surfaces category options that serve the same purpose without requiring upfront categorisation.</p>
                </div>
                </div>
            </div>
            

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 2</span>
                <span className="frame-name">Trip created — the Explore page</span>
                </div>
                <div className="frame-body">
                <h3>A space built around Sarah's trip</h3>
                <p>
                    The moment Sarah's trip is created, she lands on a page that already knows who she is and where she's going. The Explore page has a Trip Header to New York City, dated to her weekend, and named with her trip title. The trip name auto-populates from the destination to reduce friction, but she can rename it if she wants (in this case, she keeps "Trip to New York City").                 
                </p>
                <p>
                    The Explore page was designed to feel distinct from a typical search results page. Categories are displayed as tiles rather than a dropdown because the act of scanning them is itself a form of inspiration. This is the browsing phase, and the design respects that by keeping the page scannable.
                </p>
            
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[1].img} alt={trippyTravel.images.wireframes[1].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 2 — Explore page</div>
                </div>
            
                <div className="decision-box">
                    <div className="decision-label">Design decision</div>
                    <p className="decision-text">Initially there was a single place component for the explore page. I decided that there should be more variety in how places are viewed and laid out on this page to create more visual interest for the user in the exploration phase.</p>
                </div>
                </div>
            </div>
            

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 3</span>
                <span className="frame-name">Opening the Place Details</span>
                </div>
                <div className="frame-body">
                <h3>Sarah explores what's nearby</h3>
                <p>
                    Sarah finds a location that interests her, and wants to learn more. She clicks on the card to expand it. Here she can browse photos, key location details, find important links and a description of the place. She clicks the website link which opens the business’s website in a new tab without taking her away from her current view.
                </p>
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[2].img} alt={trippyTravel.images.wireframes[2].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 3 — Place Details</div>
                </div>
            
                </div>
            </div>

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 4</span>
                <span className="frame-name">Reading Place Reviews</span>
                </div>
                <div className="frame-body">
                <h3>Sarah sees what others think</h3>
                <p>
                    Sarah sees the rating of this location and wants to learn more about what other people think. She clicks ‘Read Reviews’ to reveal all the reviews pulled from online sources in the place card. She can now read the reviews, and may choose to filter them by newest, highest or lowest.
                </p>
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[3].img} alt={trippyTravel.images.wireframes[3].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 4 — Place Reviews</div>
                </div>
            
                </div>
            </div>
            

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frames 5a & 5b</span>
                <span className="frame-name">Add to itinerary modal — Single day & Multi-day</span>
                </div>
                <div className="frame-body">
                <h3>Scheduling with flexibility</h3>
                <p>
                    Sarah taps 'Add to itinerary' on a location she likes. A modal appears over the Explore page. If she decides to close the modal she is brought back to her exploration, uninterrupted. The modal offers two modes: Single day for a visit with a specific date and time, and Multi-day for something that spans the trip (a hotel, a festival, a park she plans to visit across multiple mornings).
                </p>
                <p>
                    Sarah selects Single day, chooses Saturday from a date picker scoped to her trip's date range, sets a time, and types a short note: "Book tickets in advance." The optional note field is low-friction.
                </p>
            
                <div className="wireframe-placeholder frame-pair">
                    <div className="mini-frame">
                    <img src={trippyTravel.images.wireframes[4].img} alt={trippyTravel.images.wireframes[4].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 5a — Single day modal</div>
                    </div>
                    <div className="mini-frame">
                    <img src={trippyTravel.images.wireframes[5].img} alt={trippyTravel.images.wireframes[5].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 5b — Multi-day modal</div>
                    </div>
                </div>
            
                <div className="decision-box">
                    <div className="decision-label">Design decision</div>
                    <p className="decision-text">
                        The decision to offer both Single day and Multi-day in the same modal came from recognising that the same 'add to itinerary' action serves different types of content. A specific restaurant visit needs a date and time; a hotel stay needs a date range. Rather than building separate flows or limiting what can be added, the modal adapts to the type of commitment the user is making.
                    </p>
                </div>
                </div>
            </div>
            

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 6</span>
                <span className="frame-name">Confirmation modal</span>
                </div>
                <div className="frame-body">
                <p>
                   The modal transitions to a confirmation state: the item has been added. Sarah sees two clear options: 'View Itinerary' to go check it, or 'Close' to continue exploring.
                </p>
                <p>
                    This is a deliberate two-option close rather than an auto-dismiss. Auto-dismissing after an action can leave users uncertain whether something happened. 
                </p>
            
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[6].img} alt={trippyTravel.images.wireframes[6].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 6 — Confirmation modal</div>
                </div>
            
                </div>
            </div>
            

            <div className="frame-block">
                <div className="frame-header">
                <span className="frame-tag">Frame 7</span>
                <span className="frame-name">The trip itinerary</span>
                </div>
                <div className="frame-body">
                <h3>The plan, taking shape</h3>
                <p>
                   Sarah taps 'View Itinerary'. The itinerary lays out her full trip. Each date appear as distinct sections, with her first item sitting under Saturday.
                </p>
                <p>
                    Each itinerary item shows location details, her note, the scheduled time, and a space for documents (confirmation emails, tickets, booking references). These don't need to be uploaded now, but the slots are visible as a reminder that the itinerary can hold more than just a name and a time.
                </p>
            
                <div className="wireframe-placeholder">
                    <img src={trippyTravel.images.wireframes[7].img} alt={trippyTravel.images.wireframes[7].alt} className="wireframe-img"/>
                    <div className="wireframe-label">Frame 7 — Trip itinerary view</div>
                </div>
                </div>
            </div>

            <div className="proto sectionSpacing" aria-labelledby="proto-title">
                <h3 id="proto-title" className="text-light mb-3 text-center">Prototype Walkthrough</h3>
                <div className="proto__frame">
                    <video
                    className="proto__video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={trippyTravel.images.trippyVideoThumbnail}
                    >
                    <source src={trippyVideo} type="video/mp4" />
                    
                    Your browser doesn't support embedded video.{" "}
                    <a href={trippyVideo} download>
                        Download the prototype walkthrough
                    </a>.
                    </video>
                </div>
            </div>

        </section>
        <section className="container sectionSpacing max800">
             <div className="card">
                <div className='w-100 mb-3'>
                    <h4 className="cardTitle">Technologies Used</h4>
                    <div className="line"></div>
                </div>

                <div className="w-100 flex-row align-center justify-center gapMd">
                    {trippyTravel.technologies.map((tech) => (
                        <TechSquare
                        key={tech.id}
                        tech={{
                            id: tech.id,
                            name: tech.name,
                            icon: tech.icon
                        }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-100 mt-5">
                    <Link to='/portfolio' className='text-center text-tertiary'>View all Projects</Link>
            </div>
        </section>

        </div>
    )
}

export default Trippy;
