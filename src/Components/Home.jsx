import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { RiseLoader } from 'react-spinners';

const Home = () => {
  const { lightMode, cards, loading, setLoading, setProducts, products } = useContext(UserContext);

  async function axiosData() {
    try {
      setLoading(true);
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=8`);
      setProducts(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <>
      <div
        className={`${lightMode
            ? 'bg-gray-100 text-gray-700'
            : 'bg-gray-900 text-gray-200'
          }  py-10 w-full flex items-center flex-col gap-12`}
      >
        <h1 className="flex justify-center items-center font-bold text-[40px] tracking-wide">
          Home Page
        </h1>

        {loading ? (
          <RiseLoader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center px-6 py-4 items-center gap-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${lightMode
                    ? 'bg-white text-gray-700 border border-gray-200'
                    : 'bg-gray-800 text-gray-200'
                  }`}
              >
                <h1 className="text-[24px] font-bold text-center">{product.title}</h1>
                <p className="text-[16px] font-medium text-center">{product.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex flex-wrap justify-around gap-6 py-12 ${lightMode
            ? 'bg-gray-100 text-gray-700'
            : 'bg-gray-900 text-gray-200'
          }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105 ${lightMode
                ? 'bg-white text-gray-700 border border-gray-200'
                : 'bg-gray-700 text-gray-100'
              }`}
          >
            <h2 className="text-[24px] font-bold">{card.name}</h2>
            <p className="text-[17px] font-medium">{card.email}</p>
            <p className="text-[15px] font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;