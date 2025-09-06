import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>I have had experience in</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/tiberman.png"} alt="tiberman" style={{width:"150px", height:"30px" }}/>
                            <img src={"/images/client-logos/revou.png"} alt="revou" style={{width:"80px", height:"80px" }} />
                            <img src={"/images/client-logos/himti.png"} alt="himti" style={{width:"80px", height:"80px" }} />
                            <img src={"/images/client-logos/hmpti.jpg"} alt="hmpti" style={{width:"80px", height:"80px" }} />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee