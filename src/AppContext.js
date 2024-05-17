import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  return (
    <AppContext.Provider value={{ form, setForm, status, setStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
