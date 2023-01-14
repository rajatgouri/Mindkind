import React, { useState, createContext } from "react";

export type AccountContextType = {
  account: boolean;
  setAccount: (value: boolean) => void;
};

// Create a context object
export const AccountContext = createContext<AccountContextType>({
  account: true,
  setAccount: () => {},
});

// Create a provider for the context object
export const AccountProvider = ({ children }: any) => {
  // Set the initial value for the context object
  const [account, setAccount] = useState(true);

  // Provide the value for the context object
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
