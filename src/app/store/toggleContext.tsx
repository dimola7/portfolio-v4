import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface Store {
//   isLoading: boolean;
//   setIsLoading: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export const StoreContext = createContext({} as Store);

const StoreProvider: React.FC = (props) => {
  const [toggle, setToggle] = useState(false);

  const value = {
    toggle,
    setToggle,
  };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

// export const ToggleContext = createContext();

// export const hey = () => {};
