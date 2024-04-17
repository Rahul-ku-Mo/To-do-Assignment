import { useState } from "react";

export const useCheckTodo = (checked: boolean) => {
  const [checkedState, setCheckedState] = useState<boolean | undefined>(
    checked
  );

  const updateCheckedState = (checkedState: boolean) => {
    setCheckedState(checkedState);
  };

  return {
    checkedState,
    updateCheckedState,
  };
};
