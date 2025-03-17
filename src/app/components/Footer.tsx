import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <p className='text-xl font-bold'>
              Vejs &copy; {new Date().getFullYear()}
            </p>
            <p className='text-sm'>Najbolja hrana od 1983</p>
          </div>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' className='hover:text-red-500 transition-colors'>
              Facebook
            </a>
            <a href='#' className='hover:text-red-500 transition-colors'>
              Instagram
            </a>
            <a href='#' className='hover:text-red-500 transition-colors'>
              Twitter
            </a>
          </div>
        </div>

        <div className='mt-8 rounded-lg overflow-hidden shadow-xl'>
          <iframe
            title='Lokacija Vejs Food'
            width='100%'
            height='300'
            frameBorder='0'
            src='https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Vejsilova+Ulica,+Sarajevo&zoom=15'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
