import React from "react";
import useInput from "./hooks/useInput";

/**
 * @component App
 * @author ArtemKhairov
 * @summary Вернет Начальный компонент
 * @returns React Application Hooks
 */

function App() {
  const username = useInput("Artem");

  return (
    <div>
      <input
        type="text"
        {...username}
        // value={value}
        // onChange={(ev) => setValue(ev.target.value)}
      />
      <button onClick={() => console.log(username)}>Console</button>
    </div>
  );
}

export default App;
