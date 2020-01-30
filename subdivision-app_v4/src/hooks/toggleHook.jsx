import React, { useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const handleToggle = () => {
    setState(!state);
  };
  return [state, handleToggle];
};
