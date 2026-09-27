import { useState } from 'react'

export default function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedText = taskText.trim()
    if (!trimmedText) return

    onAddTask(trimmedText)
    setTaskText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7">
      <label htmlFor="task-input" className="mb-2 block text-sm font-medium text-slate-700">
        Add a task
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="task-input"
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="What do you need to do?"
          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />

        <button
          type="submit"
          className="rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
        >
          Add task
        </button>
      </div>
    </form>
  )
}