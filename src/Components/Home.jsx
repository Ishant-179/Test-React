import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../Context/UserContext'
import { RiseLoader } from 'react-spinners'


const Home = () => {
const { lightMode, setCount, count, loading, setLoading, setProducts, products } = useContext(UserContext)

async function axiosData(){
    try {
        setLoading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
        setProducts(response.data)
        console.log(response.data)
        setLoading(false)
        
    } catch (error) {
        setLoading(false)
        console.error(error)
    }
}

useEffect(() => {
 axiosData()
}, [count])


return (
    <div
      className={`${
        lightMode ? "bg-slate-200 text-black" : "bg-gray-600 text-white"
      } h-full p-10 w-full flex items-center flex-col gap-10 justify-center`}
    >
      <h1 className="flex justify-center items-center font-bold text-[35px]">
        Home Page
      </h1>
      {loading ? (
        <RiseLoader />
      ) : (
        <div className="grid grid-rows-2 grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center px-4 py-2 items-center gap-4 bg-slate-400 w-[300px] rounded-xl"
            >
              <h1 className="text-[24px] font-bold">{product.title}</h1>
              <p className="text-[16px] font-medium">{product.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home
