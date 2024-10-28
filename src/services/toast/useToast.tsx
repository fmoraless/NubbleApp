import React, {useContext} from 'react';
import {createContext, useState} from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddentToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddentToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hiddentToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddentToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const {toast, showToast, hiddentToast} = useContext(ToastContext);
  return {
    toast,
    showToast,
    hiddentToast,
  };
}
