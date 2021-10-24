import React, { useEffect, useRef, useState } from "react";

/**
 * @component List
 * @author ArtemKhairov
 * @returns List with some data
 */
const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  /**
   * @param {number} - data limit
   */
  const limit = 20;
  const parentRef = useRef();
  const childRef = useRef();

  const fetchTodos = (page, limit) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((res) => res.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  return (
    <div ref={parentRef}>
      {todos.map((todo, index) => {
        return (
          <div style={{ background: "red", border: "2px solid black" }}>
            {todo.title}
          </div>
        );
      })}
      <div ref={childRef} style={{ background: "blue", height: "40px" }}></div>
    </div>
  );
};

export default List;
