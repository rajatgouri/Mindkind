import React, { useState, createContext } from "react";

export type FeedContextType = {
  feed: boolean;
  setFeed: (value: boolean) => void;
};

// Create a context object
export const FeedContext = createContext<FeedContextType>({
  feed: true,
  setFeed: () => {},
});

// Create a provider for the context object
export const FeedProvider = ({ children }: any) => {
  // Set the initial value for the context object
  const [feed, setFeed] = useState(true);

  // Provide the value for the context object
  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};
