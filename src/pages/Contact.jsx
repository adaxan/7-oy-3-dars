import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cat from '../assets/cat.jpg'

const Home = () => {
  return (
    <div className='container mx-auto mt-10 flex justify-center'>
      <LazyLoadImage
        className='w-96 h-96'
        alt={''}
        src={cat} 
        effect="blur"
        placeholderSrc={cat} 
      />
    </div>
  );
};

export default Home;
