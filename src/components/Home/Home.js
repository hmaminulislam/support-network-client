import React from 'react';
import './Home.css'

const Home = () => {
    return (
      <div>
        <div className="my-8 text-center">
          <h2 className='text-4xl font-semibold capitalize mb-6'>I grow by helping people in need.</h2>
          <input
            type="text"
            name=""
            placeholder="Serach..."
            className="input-search"
          />
          <button className='search-btn'>Search</button>
        </div>
      </div>
    );
};

export default Home;