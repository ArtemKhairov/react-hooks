import { useState } from "react";

/**
 * @category Hooks
 * @subcategory Input
 * @description Хук для Input, изменение состояния
 * @param {String} initialValue - value
 * @returns Объект с начальным значением и функцию изменения переменной
 *
 */

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
}

export default useInput;
