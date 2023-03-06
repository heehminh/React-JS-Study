import { useState } from "react";

export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSumbit];
}
