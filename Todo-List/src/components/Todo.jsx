

function Todo({ todo, setTodoList }) {
 
  const finalList = (index) => {
    const newTodo = todo.filter((v, i) => i != index);
    setTodoList(newTodo);
  };
  return (
    <>
      <div className="">
        {todo.map((items, index) => (
          <ul
            className="list-unstyled border border-1 border-white rounded-3 m-4 position-relative list-hover"
            key={index}
          >
            <li
              className={`${
                status ? "todocomplete" : ""
              } text-white p-1 px-2 fw-bold`}
             
            >
              <span className="pe-2">{index}</span>
              {items}
              <span className="position-absolute right-0">
                <i
                  className="fa-solid fa-trash text-danger pointer"
                  onClick={() => finalList(index)}
                ></i>
              </span>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default Todo;
