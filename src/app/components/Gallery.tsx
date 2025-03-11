import Image from 'next/image';
import React from 'react';

const images = [
  '/images/vejs-slikanpr1.jpeg',
  '/images/vejs-slikanpr2.jpeg',
  '/images/vejs-slikanpr3.jpeg',
  '/images/vejs-slianpr4.jpeg',
];

const Gallery = () => {
  return (
    <section id='gallery' className='p-8'>
      <h2 className='text-3xl font-bold text-center mb-6'>Galerija</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((src, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300'
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className='object-cover w-full h-48'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
