export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        aria-pressed={task.completed}
        aria-label={task.completed ? 'Mark task as not done' : 'Mark task as done'}
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-bold ${
          task.completed
            ? 'border-emerald-700 bg-emerald-700 text-white'
            : 'border-slate-300 text-transparent hover:border-emerald-700'
        }`}
      >
        ✓
      </button>

      <span
        className={`min-w-0 flex-1 break-words ${
          task.completed ? 'text-slate-400 line-through' : 'text-slate-700'
        }`}
      >
        {task.text}
      </span>

      <span className="hidden text-xs text-slate-500 sm:inline">
        {task.completed ? 'Done' : 'Not done'}
      </span>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50"
      >
        Delete
      </button>
    </li>
  )
}