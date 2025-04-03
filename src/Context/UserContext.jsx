import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
const [loading, setLoading] = useState(false)
const [count, setCount] = useState(0)
const [lightMode, setLightMode] = useState(false)
const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [description, setDescription] = useState('')
const [products, setProducts] = useState([])
const [cards, setCards] = useState([]);


const requiredVal = {
    loading,
    count,
    lightMode,
    user,
    email,
    description,
    setCount,
    setLoading,
    setLightMode,
    setUser,
    setEmail,
    setDescription,
    products,
    setProducts,
    cards,
    setCards
}

  return (
    <UserContext.Provider value={requiredVal}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
