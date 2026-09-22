import React, { createContext, useState } from 'react'

export const WishtListContext = createContext(undefined)


function WishtListProvider({children}) {
    const [wishlist, setWishlist] = useState([])

    function toggleWishlist(product) {
        const exists = wishlist.some((p) => p._id === product._id);
        if (exists) {
            setWishlist(wishlist.filter((p) => p._id !== product._id));
        } else {
            setWishlist([product, ...wishlist]);
        }
    }

    function isInWishlist(id) {
        return wishlist.some((p) => p._id === id);
    }

    return (
        <WishtListContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>

            {children}
        </WishtListContext.Provider>
    )
}

export default WishtListProvider
