import {Component} from "react";
import Slider from "react-slick"
/*@ts-ignore*/
import "./Slider.css"

import ItemSlider from "./itemSlider";


class SimpleSlider extends Component<any, any> {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            focusOnSelect:true,
            arrows: true
        }
        return (
            <div className="slider">
                <Slider {...settings}>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                    <div className="item__slider">
                        <ItemSlider />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SimpleSlider