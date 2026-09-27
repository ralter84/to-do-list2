const instructions = [
  {
    number: '01',
    title: 'Add a task',
    description: 'Type a task in the box and select “Add task.”',
  },
  {
    number: '02',
    title: 'Mark it done or undo',
    description: 'Select the circle beside a task to change its status.',
  },
  {
    number: '03',
    title: 'Delete a task',
    description: 'Select “Delete” to remove a task from your list.',
  },
]

export default function InstructionsGuide() {
  return (
    <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
        Quick guide
      </p>
      <h2 className="mt-2 text-2xl font-bold text-emerald-950">
        How to use your list
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {instructions.map((item) => (
          <article key={item.number} className="rounded-2xl bg-slate-50 p-5">
            <span className="text-sm font-bold text-emerald-700">
              {item.number}
            </span>
            <h3 className="mt-3 font-semibold text-slate-800">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}