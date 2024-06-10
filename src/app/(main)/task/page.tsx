import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    cache: "no-stor",
  });
  return await response.json();
};

const TaskPage = async () => {
  const tasks = await getTasks()
  console.log(tasks)
  return (
    <div>
      <p>TaskPage</p>
      <div>
        {/* {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))} */}
      </div>
    </div>
  );
};

export default TaskPage;
