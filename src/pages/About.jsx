import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import urohara from '../assets/urohara.jpg'

const Home = () => {
  return (
    <div className='container mx-auto mt-10 flex justify-center'>
      <LazyLoadImage
        className='w-full h-96 mt-10'
        alt={''}
        src={urohara} 
        effect="blur"
        placeholderSrc={urohara} 
      />
    </div>
  );
};

export default Home;
