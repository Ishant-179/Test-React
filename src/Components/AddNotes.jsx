import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const AddNotes = () => {
  const { lightMode, cards, setCards } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCards([...cards, formData]);
    toast.success('Form submitted successfully!');

    setFormData({
      name: '',
      email: '',
      description: '',
    });
  };

  return (
    <div
      className={`min-h-screen flex py-10 flex-col items-center text-[19px] font-medium ${lightMode ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-gray-200'
        }`}
    >
      <h1 className="text-[32px] font-bold mb-6">Add Notes</h1>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 justify-center items-center px-8 py-6 rounded-lg shadow-lg ${lightMode ? 'bg-white text-gray-700 border border-gray-200' : 'bg-gray-800 text-gray-200'
          } max-w-[400px] w-full`}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className={`w-full px-4 py-3 rounded-lg text-[16px] border focus:outline-none ${lightMode ? 'bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500' : 'bg-gray-700 border-gray-600 focus:ring-2 focus:ring-yellow-500'
            }`}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className={`w-full px-4 py-3 rounded-lg text-[16px] border focus:outline-none ${lightMode ? 'bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500' : 'bg-gray-700 border-gray-600 focus:ring-2 focus:ring-yellow-500'
            }`}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Enter a description"
          rows="5"
          className={`w-full px-4 py-3 rounded-lg text-[16px] border focus:outline-none ${lightMode ? 'bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-500' : 'bg-gray-700 border-gray-600 focus:ring-2 focus:ring-yellow-500'
            }`}
        />
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-[18px] font-bold transition-all duration-300 ${lightMode
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-yellow-500 text-black hover:bg-yellow-600'
            }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNotes;