import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContext {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContext>({} as ToastContext);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
