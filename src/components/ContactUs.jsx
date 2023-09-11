import React from 'react'
import "./NewSection.css"

const ContactUs = () => {
  return (
    
   <section className="section-big main-color">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 pb-20 text-center"> 
        <h1 className="section-title mb-10"> About us </h1>
       
        <div className="exp-separator center-separator">
          <div className="exp-separator-inner">
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <ul className="i-list medium">
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-desktop" /> </div>
            <div className="icon-content">
              <h3 className="title">Our Mission</h3>
              <p className="sub-title">
              Our mission is to ethically source and deliver the Earth’s most magnificent minerals and gems right to your hands. Through responsible mining and direct relationships with artisans, we guarantee not only the highest quality but also a sustainable chain of custody for each precious item.
              </p>
            </div>
            <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-code" /> </div>
            <div className="icon-content">
              <h3 className="title">Our Team</h3>
              <p>
              Our team comprises passionate geologists, gemologists, and mining experts who collectively bring over two decades of industry experience. Each member is dedicated to upholding the highest standards of integrity and expertise to ensure that you receive unparalleled quality and value
              </p>
            </div>
            <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-paper-plane" /> </div>
            <div className="icon-content">
              <h3 className="title">24/7 Customer Support</h3>
              <p>
              24/7 customer support is a service that provides customers with assistance at all times of the day, regardless of time zone. It's crucial for businesses that ...
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="i-list medium">
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-diamond" /> </div>
            <div className="icon-content">
              <h3 className="title">Our Mine</h3>
              <p className="sub-title">
              In our pursuit of excellence, we own and operate several mines across diverse geographies. These mines are not just the source of our exceptional products; they are a testament to our commitment to sustainable and responsible mining practices.
              </p>
            </div>
            <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-recycle" /> </div>
            <div className="icon-content">
              <h3 className="title">The Mountain’s Heart</h3>
              <p>
              Located in [Country/Region], this mine is the origin of some of our most radiant gemstones. The unique geological conditions here produce gems of extraordinary color and clarity. [Insert photo of Mine 1
              </p>
            </div>
            <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-check" /> </div>
            <div className="icon-content">
              <h3 className="title">Silver Stream</h3>
              <p>
              Nestled in the valleys of [Country/Region], Silver Stream is rich in high-grade silver ores. The ores are characterized by their unparalleled luster and malleability. [Insert photo of Mine 2
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="i-list medium">
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-codepen" /> </div>
            <div className="icon-content">
              <h3 className="title">Expertise & Certifications</h3>
              <p className="sub-title">
              All our products come with a Certificate of Authenticity, validated by accredited laboratories. Our methods and practices adhere to international standards, ensuring that you get only the best from us
              </p>
            </div>
            <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            {/* <div className="icon"> <i className="fa fa-newspaper-o" /> </div> */}
            {/* <div className="icon-content">
              <h3 className="title">Multipurpose Concept</h3>
              <p>
                Aenean vulputate eleifend tellus ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
              </p>
            </div> */}
            {/* <div className="iconlist-timeline" />
          </li>
          <li className="i-list-item">
            <div className="icon"> <i className="fa fa-heart-o" /> </div>
            <div className="icon-content">
              <h3 className="title">Crafted With Love</h3>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac lorem ante, dapibus in.
              </p>
            </div> */}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactUs

