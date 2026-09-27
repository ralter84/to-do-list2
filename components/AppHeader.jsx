export default function AppHeader() {
  return (
    <header className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-lg font-bold text-white">
        ✓
      </div>

      <div>
        <p className="text-lg font-bold tracking-tight text-emerald-950">
          Daymark
        </p>
        <p className="text-xs text-slate-500">A little more focus, every day</p>
      </div>
    </header>
  )
}