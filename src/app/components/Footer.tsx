import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 mt-8'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='text-center md:text-left'>
          <p className='font-bold'>Vejs &copy; {new Date().getFullYear()}</p>
          <p>Najbolja hrana od 1983</p>
        </div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='#' className='hover:text-red-500'>
            Facebook
          </a>
          <a href='#' className='hover:text-red-500'>
            Instagram
          </a>
          <a href='#' className='hover:text-red-500'>
            Twitter
          </a>
        </div>
      </div>
      <div>OVDJE INEGRISAT GOOGLE LOKACIJU POSLA</div>
    </footer>
  );
};

export default Footer;
