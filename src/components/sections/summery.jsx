import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.jpg"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Tafazzul Affan, a website developer.
                                </h2>
                                <p>I'm a web developer studying at Surabaya State University and passionate about building clean, responsive, and user-focused websites. My experience spans across multiple industries, enabling me to design flexible and scalable web solutions.</p>
                                <p>I have a wide range of experience in professional organizations and industries. I've handled several projects from both companies and outside the company, using JavaScript and PHP programming languages, and mastering various frameworks such as react.JS, next.JS, express.js, Laravel, etc. With my experience and skills, I'm confident I can deliver the best results for you.</p>
                                <div className="hero-btns">
                                    <a href="contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery