import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  ///////////// useReducer com action

  const initialTasks = [
    {
      id: 1,
      text: "Fazer algo",
    },
    {
      id: 2,
      text: "Fazer algo 2",
    },
    {
      id: 3,
      text: "Fazer algo 3",
    },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };


  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>
      {/* useReducer com actions */}
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
        <hr/>
    </div>
  );
};

export default HookUseReducer;
