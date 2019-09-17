import React, { Component } from "react";
import Slider from "../src/slider";

export default class MultipleItems extends Component {
  onClick = index => {
    console.log(index);
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    const arr = new Array(8).fill(1);
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  this.onClick(index + 1);
                }}
              >
                <h3>{index + 1}</h3>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
