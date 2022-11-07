import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import ServiceCard from './ServiceCard';

const Home = () => {
  const services = useLoaderData()
    return (
      <div className='px-5 sm:px-10 md:px-20 mb-20'>
        <div className="my-8 text-center">
          <h2 className="text-4xl font-semibold capitalize mb-6">
            I grow by helping people in need.
          </h2>
          <input
            type="text"
            name=""
            placeholder="Serach..."
            className="input-search"
          />
          <button className="search-btn">Search</button>
        </div>
        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Home;