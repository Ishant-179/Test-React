import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const Card = () => {
  const { lightMode } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [cards, setCards] = useState([]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCards([...cards, formData]); 
    toast.success('Form is submitted');

    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  return (
    <div
      className={`h-full w-full flex py-6 flex-col items-center text-[19px] font-bold ${
        lightMode ? 'bg-slate-200 text-black' : 'bg-slate-600 text-white'
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${
          lightMode ? 'bg-slate-700' : 'bg-slate-200'
        } flex flex-col gap-3 justify-center items-center px-6 py-3 rounded-lg max-w-[320px] mb-6`}
      >
        <div className="flex flex-col gap-4 justify-start items-start">
          <label className="text-gray-300 text-[14px]">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            value={formData.name}
            className="text-gray-600 w-full bg-slate-300 text-[14px] px-4 py-2"
            placeholder="What's your name"
          />
        </div>
        <div className="flex flex-col gap-4 justify-start items-start">
          <label className="text-gray-300 text-[14px]">Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            value={formData.email}
            className="text-gray-600 w-full bg-slate-300 text-[14px] px-4 py-2"
            placeholder="What's your email"
          />
        </div>
        <div className="flex flex-col gap-4 justify-start items-start">
          <label className="text-gray-300 text-[14px]">Description:</label>
          <textarea
            rows={7}
            type="text"
            name="description"
            onChange={handleChange}
            required
            value={formData.description}
            className="text-gray-600 w-full bg-slate-300 text-[14px] px-4 py-2"
            placeholder="What's your contact"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg text-center"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-wrap justify-around gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              lightMode ? 'bg-slate-700 text-white' : 'bg-slate-200 text-black flex flex-col items-center justify-center px-5 py-2'
            }`}
          >
            <h2 className="text-[24px] font-bold">{card.name}</h2>
            <p className='text-[17px] font-light'>{card.email}</p>
            <p className='text-[15px] font-light'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
