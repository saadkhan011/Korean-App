import React from 'react'
// import { Ellipse, Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5, Ellipse6, Ellipse7, Ellipse8 } from '../public/assets/index'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 30px 0;
height: 70px !important;
`;

function Slider() {

    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '15rem',
        pagination: false,
        arrows: false,
        perPage: 5,
        perMove: 1,
        speed: "1000",
        interval: "2000"
    };
    let generateSlides = ["./Ellipse 165.png", "./Ellipse 166.png", "./Ellipse 167.png", "./Ellipse 168.png", "./Ellipse 169.png", "./Ellipse 170.png", "./Ellipse 171.png", "./Ellipse 172.png", "./Ellipse 173.png"];

    return (
        <Wrapper>
            <Splide
                options={options}
                aria-labelledby="autoplay-example-heading"
                hasTrack={false}
                className='dd'
                data-splide-interval="500"
            >
                <SplideTrack className='dd'>
                    {generateSlides.map(slide => (
                        <SplideSlide key={slide}>
                            <img src={slide} alt={slide} />
                        </SplideSlide>
                    ))}
                </SplideTrack>

            </Splide>
        </Wrapper>
    )
}

export default Slider