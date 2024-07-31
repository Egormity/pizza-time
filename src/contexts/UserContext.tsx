import { createContext, ReactNode, useContext, useState } from 'react';
import { UserType } from '../utils/types';

type UserContextProps = null | {
  isLoginPopupOpen: boolean;
  setIsLoginPopupOpen: (value: boolean) => void;
  setIsLoginPopupOpenOpposite: () => void;

  user: UserType;
  setUser: (value: UserType) => void;
};

const UserContext = createContext<UserContextProps>(null);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const localData = localStorage.getItem('active-user');
  const [user, setUser] = useState(localData ? JSON.parse(localData) : null);

  function setIsLoginPopupOpenOpposite() {
    setIsLoginPopupOpen(s => !s);
  }

  return (
    <UserContext.Provider
      value={{
        isLoginPopupOpen,
        setIsLoginPopupOpen,
        setIsLoginPopupOpenOpposite,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error('UserContext was used outside of UserContextProvider');
  return context;
}

export { UserContextProvider, useUserContext };
