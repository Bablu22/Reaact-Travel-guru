import React, { useEffect, useState } from 'react';
import Services from './Services';

const Booking = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('../service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="container mx-auto mt-5">
            <div className="sm:grid grid-cols-3 ">

                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    >

                    </Services>)
                }


            </div>

        </div>
    );
};

export default Booking;