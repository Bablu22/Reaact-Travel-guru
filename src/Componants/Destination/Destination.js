import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Destination.css'
const Destination = () => {
    const { placeId } = useParams()

    const [destination, setDestination] = useState([])

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])

    const item = destination.find(i => i?.id == placeId)

    return (
        <div>
            <div className="destination">
                <div className="destination-container">
                    <div className="sm:grid grid-cols-2 gap-5 p-4">
                        <div className="flex  items-center sm:ml-10 sm:mt-0 my-7" >
                            <div>
                                <h1 className="text-white sm:text-7xl text-3xl italic  font-bold py-3">{item?.name}</h1>
                                <p className="text-white sm:text-lg text-gray-400 italic text-justify">{item?.description}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-white p-5 sm:w-3/4 mx-auto rounded-lg shadow-xl font-bold">
                                <div>
                                    <h6 className="text-green-400 p-2">Origin</h6>
                                    <div className="w-full bg-gray-200 p-3 rounded-lg">
                                        <h6>Bangladesh</h6>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-green-400 p-2">Destination</h6>
                                    <div className="w-full bg-gray-200 p-3 rounded-lg">
                                        <h6>{item?.name}</h6>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div>
                                        <label htmlFor="start">From</label><br />
                                        <input className="sm:w-full w-3/4 bg-gray-200 p-2 rounded-lg focus:outline-none" type="date" id="birthday" name="birthday" placeholder="2021-07-22" />
                                    </div>
                                    <div>
                                        <label htmlFor="start">To</label><br />
                                        <input className="sm:w-full w-3/4 bg-gray-200 p-2 rounded-lg focus:outline-none" type="date" id="birthday" name="birthday" placeholder="2021-07-22" />
                                    </div>

                                </div>
                                <Link to="/booking" >
                                    <div className="w-full text-center rounded-lg bg-yellow-500 py-2 mt-5 font-medium">
                                        Start Booking
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;