import React from "react";
import Instagram from "../../images/instagram_icon.png";
import Yelp from "../../images/yelp_icon.png";
import Facebook from "../../images/facebook_icon.png";

function Desktop_footer() {
  return (
    <div id="desktop_footer">
      <a
        href="https://www.google.com/maps/place/Lush+Eye+Bar/@37.7646718,-122.2403087,15z/data=!4m5!3m4!1s0x0:0x243d25c8e01b0637!8m2!3d37.7646718!4d-122.2403087"
        target="_blank"
        rel="noopener noreferrer"
        className="address"
      >
        2447 Santa Clara Ave #103, Alameda, CA 94501
      </a>
      <div className="contact_details">
        <a href="sms:510-736-3779" className="subtext">
          510-736-3779 (Text only)
        </a>
        <a href="mailto: lusheyebar@gmail.com">lusheyebar@gmail.com</a>
      </div>
      <div className="social_media">
          <a href="https://www.instagram.com/lusheyebar/" target="_blank" rel="noopener noreferrer"><img id="insta" src={Instagram}/></a>
          <a href="https://www.yelp.com/biz/lush-eye-bar-alameda?start=60" target="_blank" rel="noopener noreferrer"><img id="yelp" src={Yelp}/></a>
          <a href="https://www.facebook.com/lusheyebar/" target="_blank" rel="noopener noreferrer"><img id="fb" src={Facebook}/></a>
      </div>
    </div>
  )
}

export default Desktop_footer
