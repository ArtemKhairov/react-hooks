import { useState } from "react";

/**
 * 
 * 
 * @constructor
 * @description Хук для Input, изменение состояния
 * @param {any} initialValue
 * @returns Объект с начальным значением и функцию изменения переменной
 *
 */

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
}
