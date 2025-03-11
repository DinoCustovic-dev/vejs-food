import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Uklonjen console.log zbog ESLint pravila
    alert('Poruka uspešno poslata!');
  };

  return (
    <section id='contact' className='p-8 bg-gray-100'>
      <h2 className='text-3xl font-bold text-center mb-6'>Kontaktirajte nas</h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Ime</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Kontakt (broj, email ili fax)
          </label>
          <input
            type='text'
            name='contact'
            value={formData.contact}
            onChange={handleChange}
            className='w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Poruka</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
        >
          Pošalji
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
