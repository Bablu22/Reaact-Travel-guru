import React, { useEffect, useState } from 'react';
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from 'react-router';


const Home = () => {

    const [places, setPlaces] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const handlePlace = (id) => {
        history.push(`/destination/${id}`)
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <div className="sm:grid grid-cols-2 gap-4 ">
                        <div className="flex justify-center items-center ml-10 sm:mt-0 mt-9" >
                            <div>
                                <h1 className="text-white sm:text-7xl text-3xl italic  font-bold py-3">Plan your dream trip</h1>
                                <p className="text-white sm:text-xl text-gray-300">Trips always expand the horizon and enrich with pleasant impressions, which directly affects emotional health and a sense of satisfaction with life.</p>
                            </div>
                        </div>
                        <div className="p-10 z-50">
                            <Slider {...settings} className="">

                                {
                                    places.map(place => (
                                        <div>
                                            <div onClick={() => handlePlace(place.id)} className="p-4 card">
                                                <div className="card-img">
                                                    <img src={place.img} alt="" />
                                                </div>
                                                <h6>{place.name}</h6>
                                            </div>
                                        </div>
                                    ))
                                }


                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;