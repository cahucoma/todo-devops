
"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask() {
    const trimmedTask = task.trim();

    if (!trimmedTask) return;

    setTasks([...tasks, trimmedTask]);
    setTask("");
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          My ToDo List
        </h1>

        <p className="mb-8 text-gray-500">
          Organize your tasks and stay productive.
        </p>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            placeholder="Enter a task..."
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <h2 className="mb-4 text-lg font-semibold text-gray-700">
          My Tasks
        </h2>

        {tasks.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center text-gray-400">
            No tasks yet. Add your first task!
          </div>
        ) : (
          <ul className="space-y-3">
            {tasks.map((item, index) => (
              <li
                key={index}
                className="rounded-lg border border-gray-200 p-4 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
