import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  
    const allPhotosLocalStorage = JSON.parse(localStorage.getItem("allPhotosLocalStorage"))
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || [])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(allPhotosLocalStorage ? allPhotosLocalStorage : data))
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem("allPhotosLocalStorage", JSON.stringify(allPhotos))
    }, [allPhotos])

    // localStorage.removeItem('allPhotosLocalStorage');

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
            setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    //
    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }