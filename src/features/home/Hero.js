import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function Hero() {
    const overlay = {
        // height: '560px',
        width: '100%',
        color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        background: '#364d79',
    };
    const imageStyle = {
        width: '100%',
        height: '560px',
        objectFit: 'cover',
        backgroundSize: 'cover',
    };

    return (
            <Carousel autoplay className="carousel">
                <div>
                <div style={overlay}></div>
                <img
                alt="Food menu carousel"
                style={imageStyle}
                src="/imgs/1.jpg"/>
                </div>
                <div>
                <div style={overlay}></div>
                <img
                alt="Food menu carousel"
                style={imageStyle}
                src="/imgs/6.jpg"/>
                </div>
                <div>
                <div style={overlay}></div>
                <img
                alt="Food menu carousel"
                style={imageStyle}
                src="/imgs/4.jpg"/>
                </div>
                <div>
                    <div style={overlay}></div>
                <img
                alt="Food menu carousel"
                style={imageStyle}
                src="/imgs/5.jpg"/>
                </div>
            </Carousel>
    )
}

