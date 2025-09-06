import React from 'react'
import Link from 'next/link'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Got a project in mind? Let’s code it into reality</h2>
                                <p>Let’s build something great together ✨. I'm also open to full-time or part-time opportunities to develop impactful web experiences and push the boundaries of the modern web.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Let's Talk  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction