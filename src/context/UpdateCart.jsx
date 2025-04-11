"use client";

import { createContext, useState } from "react";

// Create the context
export const UpdateCartContext = createContext();

// Create the provider
const UpdateCartProvider = ({ children }) => {
  const [updateCart, setUpdateCart] = useState(false);

  // You can add other cart-related logic here too if needed

  return (
    <UpdateCartContext.Provider value={{ updateCart, setUpdateCart }}>
      {children}
    </UpdateCartContext.Provider>
  );
};

export default UpdateCartProvider;
