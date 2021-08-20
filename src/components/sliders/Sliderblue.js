import React from 'react'
import slider7 from "../../img/slider-blue/1.jpg"
import slider8 from "../../img/slider-blue/2.jpg"
import slider9 from "../../img/slider-blue/3.jpg"

export const Sliderblue = () => {
    return (
    <div id="carouselExampleIndicators" className="carousel slide w-50 h-30" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider7} className="d-block" alt="phone"/>
          </div>
          <div className="carousel-item">
            <img src={slider8} className="d-block" alt="phone"/>
          </div>
          <div className="carousel-item">
            <img src={slider9} className="d-block" alt="phone"/>
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

export default Sliderblue;