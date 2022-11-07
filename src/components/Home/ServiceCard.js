import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    return (
        <div className='container'>
            <img src={service.img} alt="" className='image'/>
            <div className="overlay">
                <h3 className='service-title'>{service.name}</h3>
            </div>
        </div>
    );
};

export default ServiceCard;