import React from 'react'
import slider4 from "../../img/slider-white/1.jpg"
import slider5 from "../../img/slider-white/2.jpg"
import slider6 from "../../img/slider-white/3.jpg"

export const Sliderwhite = () => {
    return (
    <div id="carouselExampleIndicators" className="carousel slide w-50 h-30" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider4} className="d-block" alt="phone"/>
          </div>
          <div className="carousel-item">
            <img src={slider5} className="d-block" alt="phone"/>
          </div>
          <div className="carousel-item">
            <img src={slider6} className="d-block" alt="phone"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}

export default Sliderwhite;